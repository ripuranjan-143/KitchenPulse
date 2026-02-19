import { StatusCodes } from 'http-status-codes';
import { ExpressError } from '../utils/ExpressError.js';
import User from '../models/userModel.js';

const getUser = async (req, res) => {
  const existingUserId = req.user.id;
  const existingUser = await User.findById(existingUserId).select('-password');
  if (!existingUser) {
    throw new ExpressError(StatusCodes.NOT_FOUND, 'User not found!');
  }

  return res.status(StatusCodes.OK).json(existingUser);
};

export { getUser };
