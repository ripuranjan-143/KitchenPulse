import Joi from 'joi';

// FULL NAME
const fullNameField = Joi.string().min(4).max(50).trim().messages({
  'string.min': 'Full name must be at least 4 characters',
  'string.max': 'Full name cannot exceed 50 characters',
  'string.base': 'Full name must be a string',
});

// EMAIL
const emailField = Joi.string().email().trim().messages({
  'string.email': 'Please provide valid email',
  'string.base': 'Email must be string',
});

// PASSWORD
const passwordField = Joi.string().min(6).trim().messages({
  'string.min': 'Password must be at least 6 characters',
  'string.base': 'Password must be string',
});

// MOBILE
const mobileField = Joi.string()
  .pattern(/^[0-9]{10}$/)
  .messages({
    'string.pattern.base': 'Mobile must be 10 digit number',
  });

// ROLE
const roleField = Joi.string().valid('user', 'vendor', 'deliveryPartner').messages({
  'any.only': 'Invalid role',
});

export { fullNameField, emailField, passwordField, mobileField, roleField };
