import nodemailer from 'nodemailer';
import Config from '../config/index.js';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: Config.email,
    pass: Config.emailPassword,
  },
});

export const sendPasswordResetOtpEmail = async (to, otp) => {
  await transporter.sendMail({
    from: Config.email,
    to,
    subject: 'Reset Your Password',
    html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`,
  });
};
