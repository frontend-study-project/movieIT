import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main/Main";
import Movie from "../pages/Movie";
import Ticket from "../pages/Ticket";
import Theater from "../pages/Theater";
import Mypage from "../pages/Mypage";
import Login from "../pages/Auth/Login/Login";
import Join from "../pages/Auth/Join/Join";

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
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/join",
        element: <Join />
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
