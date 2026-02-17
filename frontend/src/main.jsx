import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProjectRoutes from './ProjectRoutes.jsx';
import GlobalToaster from './components/common/GlobalToaster.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <GlobalToaster />
      <ProjectRoutes />
    </BrowserRouter>
  </>
);
