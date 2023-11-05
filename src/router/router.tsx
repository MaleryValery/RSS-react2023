import { createBrowserRouter } from 'react-router-dom';
import { CardDetails } from '../components/Card/CardDetails/CardDetails';
import ErrorElement from '../components/UI/ErrorElement/ErrorElement';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'details/:id',
        element: <CardDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default router;
