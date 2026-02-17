import Joi from 'joi';
import {
  fullNameField,
  emailField,
  passwordField,
  mobileField,
  roleField,
  otpField,
} from './baseSchema.js';

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

// SEND OTP
const sendPasswordResetOtpSchema = Joi.object({
  body: Joi.object({
    email: emailField.required(),
  }).required(),
});

// VERIFY OTP
const verifyPasswordResetOtpSchema = Joi.object({
  body: Joi.object({
    email: emailField.required(),
    otp: otpField.required(),
  }).required(),
});

// RESET PASSWORD
const resetUserPasswordSchema = Joi.object({
  body: Joi.object({
    email: emailField.required(),
    newPassword: passwordField.required(),
  }).required(),
});

export {
  registerSchema,
  loginSchema,
  sendPasswordResetOtpSchema,
  verifyPasswordResetOtpSchema,
  resetUserPasswordSchema,
};
