import { useRoutes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp.jsx';
import SignIn from './pages/auth/SingIn.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';

function ProjectRoutes() {
  const routes = useRoutes([
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
  ]);
  return routes;
}

export default ProjectRoutes;
