import { Router } from 'express';
import WorkshopEnquiry from '../models/WorkshopEnquiry';
import { validate } from '../middleware/validate';
import { z } from 'zod';

const router = Router();

const enquirySchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10, 'Phone must be at least 10 characters').optional().or(z.literal('')),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })
});

// Create a new enquiry
router.post('/', validate(enquirySchema), async (req, res, next) => {
  try {
    const newEnquiry = new WorkshopEnquiry(req.body);
    const saved = await newEnquiry.save();
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: saved
    });
  } catch (error) {
    next(error);
  }
});

export default router;
