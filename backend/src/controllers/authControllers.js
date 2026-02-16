import { StatusCodes } from 'http-status-codes';
import { genToken, hashPassword, comparePassword } from '../utils/authHelper.js';
import { ExpressError } from '../utils/ExpressError.js';
import User from '../models/userModel.js';

// register
const registerUser = async (req, res) => {
  const { fullName, email, password, mobileNumber, role } = req.body;
  const cleanedEmail = email.trim().toLowerCase();
  const cleanedFullName = fullName.trim();
  const cleanedMobile = mobileNumber.trim();
  // check if email already exists
  const existingUser = await User.findOne({ email: cleanedEmail });
  if (existingUser) {
    throw new ExpressError(StatusCodes.CONFLICT, 'Email is already used, try different email!');
  }
  const existingMobile = await User.findOne({ mobileNumber: cleanedMobile });
  if (existingMobile) {
    throw new ExpressError(
      StatusCodes.CONFLICT,
      'Mobile number is already used, try different number!'
    );
  }

  const hashedPassword = await hashPassword(password);
  // create new user
  const newUser = new User({
    fullName: cleanedFullName,
    email: cleanedEmail,
    role,
    mobileNumber: cleanedMobile,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  const token = genToken(savedUser._id);

  res.cookie('token', token, {
    secure: false,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  return res.status(StatusCodes.CREATED).json({
    _id: savedUser._id,
    fullName: savedUser.fullName,
    email: savedUser.email,
    mobileNumber: savedUser.mobileNumber,
    role: savedUser.role,
    message: 'User created successfully!',
  });
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user exists
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (!existingUser) {
    throw new ExpressError(StatusCodes.UNAUTHORIZED, 'Invalid email or password!');
  }
  // match password
  const isMatched = await comparePassword(password, existingUser.password);
  if (!isMatched) {
    throw new ExpressError(StatusCodes.UNAUTHORIZED, 'Invalid email or password!');
  }

  const token = genToken(existingUser._id);
  res.cookie('token', token, {
    secure: false,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  return res.status(StatusCodes.OK).json({
    _id: existingUser._id,
    fullName: existingUser.fullName,
    email: existingUser.email,
    mobileNumber: existingUser.mobileNumber,
    role: existingUser.role,
    message: 'Login successfull!',
  });
};

// logout
const logoutUser = async (req, res) => {
  res.clearCookie('token');
  return res.status(StatusCodes.OK).json({ message: 'Logout successfull!' });
};

export { registerUser, loginUser, logoutUser };
