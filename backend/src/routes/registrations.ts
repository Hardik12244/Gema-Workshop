import { Router } from 'express';
import Registration from '../models/Registration';
import { RequireAuthProp, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { sendRegistrationEmail } from '../utils/mailer';
import Stripe from 'stripe';

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', { apiVersion: '2023-10-16' as any });

// Create a new registration (protected)
router.post('/', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const newRegistration = new Registration({
      ...req.body,
    });
    const saved = await newRegistration.save();
    
    // Trigger email notification
    const emailPreviewUrl = await sendRegistrationEmail(
      req.body.email, 
      req.body.parentName, 
      req.body.childName, 
      req.body.workshopId
    );

    // Create Stripe Checkout Session
    let checkoutUrl = '';
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Workshop Registration: ${req.body.workshopId}`,
                description: `For student: ${req.body.childName}`,
              },
              unit_amount: 19900, // $199.00
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:5173/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:5173/`,
      });
      checkoutUrl = session.url || '';
    } catch (stripeError) {
      console.log('Stripe error (likely missing or invalid API key). Using fallback URL.');
      checkoutUrl = 'http://localhost:5173/dashboard?mock_payment=true';
    }

    res.status(201).json({ ...saved.toObject(), emailPreviewUrl, checkoutUrl });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit registration', error });
  }
});

// Get user's registrations (protected)
router.get('/my-registrations', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    // We would link via email or userId
    const email = req.query.email as string;
    const registrations = await Registration.find({ email });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch registrations', error });
  }
});

export default router;
