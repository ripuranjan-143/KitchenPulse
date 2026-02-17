import axiosInstance from '../config/axiosInstance.js';

// Signup
const signupUser = async (user) => {
  const { data } = await axiosInstance.post('/auth/register', user, { withCredentials: true });
  return data;
};

export { signupUser };
