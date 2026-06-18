import { Router } from 'express';
import User from '../models/User';
import { RequireAuthProp, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const router = Router();

// Get current user profile
router.get('/me', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const clerkId = req.auth.userId;
    const user = await User.findOne({ clerkId });
    if (!user) {
       return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
});

// Create or update user after sign up/in (webhook or manual call from frontend)
router.post('/sync', ClerkExpressRequireAuth() as any, async (req: RequireAuthProp<any>, res) => {
  try {
    const clerkId = req.auth.userId;
    const { email, firstName, lastName } = req.body;
    
    let user = await User.findOne({ clerkId });
    if (!user) {
      user = new User({ clerkId, email, firstName, lastName });
      await user.save();
    } else {
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error syncing user' });
  }
});

export default router;
