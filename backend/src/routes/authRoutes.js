import express from 'express';
import { wrapAsync } from '../utils/wrapAsync.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  sendPasswordResetOtp,
  verifyPasswordResetOtp,
  resetUserPassword,
} from '../controllers/authControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import {
  registerSchema,
  loginSchema,
  sendPasswordResetOtpSchema,
  verifyPasswordResetOtpSchema,
  resetUserPasswordSchema,
} from '../schemas/authSchema.js';

const authRouter = express.Router();

authRouter.post('/register', validateSchema(registerSchema), wrapAsync(registerUser));
authRouter.post('/login', validateSchema(loginSchema), wrapAsync(loginUser));
authRouter.post('/logout', wrapAsync(logoutUser));
authRouter.post(
  '/password-reset/otp',
  validateSchema(sendPasswordResetOtpSchema),
  wrapAsync(sendPasswordResetOtp)
);
authRouter.post(
  '/password-reset/verify',
  validateSchema(verifyPasswordResetOtpSchema),
  wrapAsync(verifyPasswordResetOtp)
);
authRouter.post(
  '/password-reset',
  validateSchema(resetUserPasswordSchema),
  wrapAsync(resetUserPassword)
);

export { authRouter };
