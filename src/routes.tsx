import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Eventspage from './pages/Eventspage';
import Newspage from './pages/Newspage';
import LPRESTeampage from './pages/LPRESTeampage';
import Contactpage from './pages/Contactpage';
import Projectspage from './pages/Projectspage';
import Errorpage from './pages/Errorpage';
import FAQSpage from './pages/FAQSpage';
import ProjectsDetailspage from './pages/ProjectDetailspage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'about', element: <Aboutpage /> },
      { path: 'events', element: <Eventspage /> },
      { path: 'news', element: <Newspage /> },
      { path: 'team', element: <LPRESTeampage /> },
      { path: 'contact', element: <Contactpage /> },
      { path: 'projects', element: <Projectspage /> },
      { path: 'projects/:id', element: <ProjectsDetailspage /> },
      { path: 'faqs', element: <FAQSpage /> },
    ],
  },
]);

export default router;
