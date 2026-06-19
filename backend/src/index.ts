import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { errorHandler } from './middleware/errorHandler';

import registrationRoutes from './routes/registrations';
import enquiryRoutes from './routes/enquiries';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;   

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gema-workshop-three.vercel.app/"
    ],
    credentials: true
  })
);
app.use(express.json());

// Routes
app.use('/api/registrations', registrationRoutes);
app.use('/api/enquiry', enquiryRoutes);

// Basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove_clone';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Global Error Handler
app.use(errorHandler);
