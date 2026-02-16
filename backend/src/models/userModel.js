import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'vendor', 'deliveryPartner'],
      required: true,
    },
    passwordResetOtp: {
      type: String,
    },
    isResetOtpVerified: {
      type: Boolean,
      default: false,
    },
    resetOtpExpires: {
      type: Date,
    },
    socketId: {
      type: String,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    currentLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] },
    },
  },
  { timestamps: true }
);

userSchema.index({ currentLocation: '2dsphere' });

const User = mongoose.model('User', userSchema);
export default User;
