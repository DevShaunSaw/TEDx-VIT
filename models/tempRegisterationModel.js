import mongoose from "mongoose";

const TempRegistrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  seat: { type: String, required: true },
  userId: { type: String, default: null }
}, {
  timestamps: true,
});

export default mongoose.models.TempRegistration || mongoose.model("TempRegistration", TempRegistrationSchema);
