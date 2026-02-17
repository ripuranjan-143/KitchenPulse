import { useRoutes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp.jsx';
import SignIn from './pages/auth/SingIn.jsx';

function ProjectRoutes() {
  const routes = useRoutes([
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> },
  ]);
  return routes;
}

export default ProjectRoutes;
