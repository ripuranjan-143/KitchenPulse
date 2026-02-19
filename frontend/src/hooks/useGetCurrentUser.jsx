import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAPI } from '../services/userService.js';
import showToast from '../utils/toastHelper.js';
import { setUserData } from '../redux/userSlice.js';

function useGetCurrentUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getUserAPI();
        dispatch(setUserData(data));
      } catch (error) {
        showToast(error, 'error');
      }
    };

    getUser();
  }, []);
}

export default useGetCurrentUser;
