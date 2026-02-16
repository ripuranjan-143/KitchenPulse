import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Config from '../config/index.js';

// hash the password using bcrypt with generated salt
const hashPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};

// generate JWT authentication token
const genToken = (id) => {
  return jwt.sign({ id }, Config.secretKey, {
    expiresIn: '3d',
  });
};

const comparePassword = (enteredPassword, storedPassword) => {
  return bcryptjs.compare(enteredPassword, storedPassword);
};

export { hashPassword, genToken, comparePassword };
