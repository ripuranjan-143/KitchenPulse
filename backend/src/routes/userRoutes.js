import express from 'express';
import { getUser } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { wrapAsync } from '../utils/wrapAsync.js';

const userRouter = express.Router();

userRouter.get('/me', verifyToken, wrapAsync(getUser));

export { userRouter };
