import { Router } from 'express';
import Registration from '../models/Registration';
import { RequireAuthProp, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const router = Router();

// Create a new registration (protected)
router.post('/', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const newRegistration = new Registration({
      ...req.body,
      // The frontend could optionally pass a userId if we linked it, but for simplicity we rely on the body content.
    });
    const saved = await newRegistration.save();
    res.status(201).json(saved);
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
