import axiosInstance from '../config/axiosInstance.js';

const getUserAPI = async () => {
  const { data } = await axiosInstance.get('/user/me', { withCredentials: true });
  return data;
};

export { getUserAPI };
