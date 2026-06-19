import { Router } from 'express';
import Registration from '../models/Registration';
import { RequireAuthProp, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { sendRegistrationEmail } from '../utils/mailer';
const router = Router();

// Create Registration (Simulated Payment)
router.post('/', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const registrationData = req.body;

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
