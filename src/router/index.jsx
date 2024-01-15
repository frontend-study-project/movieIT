import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main/Main";
import Movie from "../pages/Movie";
import Ticket from "../pages/Ticket";
import Theater from "../pages/Theater";
import Mypage from "../pages/Mypage";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/theater",
        element: <Theater />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
