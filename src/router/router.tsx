import { createBrowserRouter } from 'react-router-dom';
import ErrorElement from '../components/UI/ErrorElement/ErrorElement';
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SingInPage from '../pages/Auth/SingInPage';
import CardDetails from '../components/Card/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/:id',
        element: <CardDetails />,
        errorElement: <ErrorElement />,
      },

      {
        path: 'auth',
        element: <SingInPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default router;
