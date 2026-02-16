import express from 'express';
import { wrapAsync } from '../utils/wrapAsync.js';
import { registerUser, loginUser, logoutUser } from '../controllers/authControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { registerSchema, loginSchema } from '../schemas/authSchema.js';

const authRouter = express.Router();

authRouter.post('/register', validateSchema(registerSchema), wrapAsync(registerUser));
authRouter.post('/login', validateSchema(loginSchema), wrapAsync(loginUser));
authRouter.get('/logout', wrapAsync(logoutUser));

export { authRouter };
