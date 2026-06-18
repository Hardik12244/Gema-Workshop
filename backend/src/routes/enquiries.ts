import { Router } from 'express';
import WorkshopEnquiry from '../models/WorkshopEnquiry';

const router = Router();

// Create a new enquiry (public)
router.post('/', async (req, res) => {
  try {
    const newEnquiry = new WorkshopEnquiry(req.body);
    const saved = await newEnquiry.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit enquiry', error });
  }
});

export default router;
