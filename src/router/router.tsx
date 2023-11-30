import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ErrorElement from '../pages/ErrorElement';
import Controlled from '../pages/Controlled';
import Uncontrolled from '../pages/Uncontrolled';
import RootLayout from '../components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'index',
        element: <Home />,
      },
      {
        path: 'controlled',
        element: <Controlled />,
      },
      {
        path: 'uncontrolled',
        element: <Uncontrolled />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
