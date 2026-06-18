import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    parentName: { type: String, required: true },
    childName: { type: String, required: true },
    childAge: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    workshopId: { type: String, required: true }, // Identifier for the specific workshop
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.model('Registration', registrationSchema);
