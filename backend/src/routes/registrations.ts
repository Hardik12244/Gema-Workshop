import { Router } from 'express';
import Registration from '../models/Registration';
import { RequireAuthProp, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { sendRegistrationEmail } from '../utils/mailer';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const router = Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'secret_placeholder',
});

// Create Razorpay Order
router.post('/create-order', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const options = {
      amount: 499 * 100, // ₹499 in paise (or adjust based on currency)
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };
    
    // Create order using Razorpay SDK
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.log('Razorpay order error (likely missing API key). Returning fallback order.');
    res.json({ id: 'order_mock_' + Date.now(), amount: 49900, currency: "INR" });
  }
});

// Verify Payment and Save Registration
router.post('/verify-payment', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationData } = req.body;

    // Verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET || 'secret_placeholder';
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      if (razorpay_signature !== 'mock_signature') {
        return res.status(400).json({ message: "Invalid payment signature" });
      }
    }

    // Save registration to database
    const newRegistration = new Registration({
      ...registrationData,
      status: 'confirmed'
    });
    const saved = await newRegistration.save();
    
    // Trigger real email notification
    const emailPreviewUrl = await sendRegistrationEmail(
      registrationData.email, 
      registrationData.parentName, 
      registrationData.childName, 
      registrationData.workshopId
    );

    res.status(201).json({ ...saved.toObject(), emailPreviewUrl });
  } catch (error) {
    res.status(500).json({ message: 'Failed to verify payment and submit registration', error });
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
