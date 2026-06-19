import { Router } from 'express';
import Registration from '../models/Registration';
import { sendRegistrationEmail } from '../utils/mailer';
import { validate } from '../middleware/validate';
import { z } from 'zod';

const router = Router();

const registrationSchema = z.object({
  body: z.object({
    parentName: z.string().min(2, 'Parent name is required'),
    childName: z.string().min(2, 'Child name is required'),
    childAge: z.number().min(8, 'Minimum age is 8').max(16, 'Maximum age is 16'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    workshopId: z.string().min(1, 'Workshop ID is required')
  })
});

// Create Registration
router.post('/', validate(registrationSchema), async (req, res, next) => {
  try {
    const registrationData = req.body;

    // Save registration to database
    const newRegistration = new Registration({
      ...registrationData,
      status: 'confirmed' // Assuming auto-confirm for mock payment flow
    });
    const saved = await newRegistration.save();
    
    // Trigger email notification
    const emailPreviewUrl = await sendRegistrationEmail(
      registrationData.email, 
      registrationData.parentName, 
      registrationData.childName, 
      registrationData.workshopId
    );

    res.status(201).json({
      success: true,
      message: 'Registration successfully completed',
      data: {
        registration: saved,
        emailPreviewUrl
      }
    });
  } catch (error) {
    next(error);
  }
});

// Get user's registrations (by email, since auth is removed)
router.get('/my-registrations', async (req, res, next) => {
  try {
    const email = req.query.email as string;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email query parameter is required' });
    }
    const registrations = await Registration.find({ email });
    res.json({
      success: true,
      message: 'Registrations fetched successfully',
      data: registrations
    });
  } catch (error) {
    next(error);
  }
});

export default router;
