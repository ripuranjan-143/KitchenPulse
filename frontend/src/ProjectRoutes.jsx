import { useRoutes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp.jsx';

function ProjectRoutes() {
  const routes = useRoutes([{ path: '/signup', element: <SignUp /> }]);
  return routes;
}

export default ProjectRoutes;
