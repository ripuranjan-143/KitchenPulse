import express from 'express';
import { wrapAsync } from '../utils/wrapAsync.js';
import { registerUser, loginUser, logoutUser } from '../controllers/authControllers.js';

const authRouter = express.Router();

authRouter.post('/register', wrapAsync(registerUser));
authRouter.post('/login', wrapAsync(loginUser));
authRouter.get('/logout', wrapAsync(logoutUser));

export { authRouter };
