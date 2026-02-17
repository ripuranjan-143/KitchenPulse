import axiosInstance from '../config/axiosInstance.js';

// Signup
const signupUser = async (user) => {
  const { data } = await axiosInstance.post('/auth/register', user, { withCredentials: true });
  return data;
};

// Signin
const signinUser = async (user) => {
  const { data } = await axiosInstance.post('/auth/login', user, { withCredentials: true });
  return data;
};

export { signupUser, signinUser };
