import Joi from 'joi';

// FULL NAME
const fullNameField = Joi.string().min(4).max(50).trim().messages({
  'string.empty': 'Please enter your full name',
  'string.min': 'Full name must be at least 4 characters long',
  'string.max': 'Full name cannot be longer than 50 characters',
  'string.base': 'Full name must be text only',
  'any.required': 'Full name is required',
});

// EMAIL
const emailField = Joi.string().email().trim().messages({
  'string.empty': 'Please enter your email address',
  'string.email': 'Please enter a valid email address',
  'string.base': 'Email must be text only',
  'any.required': 'Email is required',
});

// PASSWORD
const passwordField = Joi.string().min(6).trim().messages({
  'string.empty': 'Please enter a password',
  'string.min': 'Password must be at least 6 characters long',
  'string.base': 'Password must be text only',
  'any.required': 'Password is required',
});

// MOBILE
const mobileField = Joi.string()
  .pattern(/^[0-9]{10}$/)
  .messages({
    'string.empty': 'Please enter your mobile number',
    'string.pattern.base': 'Mobile number must be exactly 10 digits',
    'string.base': 'Mobile number must be numeric',
    'any.required': 'Mobile number is required',
  });

// ROLE
const roleField = Joi.string().valid('user', 'vendor', 'deliveryPartner').messages({
  'string.empty': 'Please select a role',
  'any.only': 'Please select a valid role (user, vendor, or delivery partner)',
  'any.required': 'Role selection is required',
});

export { fullNameField, emailField, passwordField, mobileField, roleField };
