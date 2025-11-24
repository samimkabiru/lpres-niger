import { createBrowserRouter } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import ComplaintPage from './pages/ComplaintPage';
import Contactpage from './pages/Contactpage';
import Errorpage from './pages/Errorpage';
import FAQSpage from './pages/FAQSpage';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import LPRESTeampage from './pages/LPRESTeampage';
import NewsDetailspage from './pages/NewsDetailspage';
import Newspage from './pages/Newspage';
import ProjectsDetailspage from './pages/ProjectDetailspage';
import Projectspage from './pages/Projectspage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'about', element: <Aboutpage /> },
      { path: 'news', element: <Newspage /> },
      { path: 'team', element: <LPRESTeampage /> },
      { path: 'contact', element: <Contactpage /> },
      { path: 'projects', element: <Projectspage /> },
      { path: 'projects/:id', element: <ProjectsDetailspage /> },
      { path: 'news/:id', element: <NewsDetailspage /> },
      { path: 'faqs', element: <FAQSpage /> },
      { path: 'complaint', element: <ComplaintPage /> },
    ],
  },
]);

export default router;
