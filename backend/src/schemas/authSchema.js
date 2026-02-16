import Joi from 'joi';
import { fullNameField, emailField, passwordField, mobileField, roleField } from './baseSchema.js';

// SIGNUP
const registerSchema = Joi.object({
  body: Joi.object({
    fullName: fullNameField.required(),
    email: emailField.required(),
    password: passwordField.required(),
    mobileNumber: mobileField.required(),
    role: roleField.required(),
  }).required(),
});

// SIGNIN
const loginSchema = Joi.object({
  body: Joi.object({
    email: emailField.required(),
    password: passwordField.required(),
  }).required(),
});

export { registerSchema, loginSchema };
