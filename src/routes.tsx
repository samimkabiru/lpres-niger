import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'about', element: <Aboutpage /> },
    ],
  },
]);

export default router;
