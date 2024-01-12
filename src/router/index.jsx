import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Main from '../pages/Main/Main';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;