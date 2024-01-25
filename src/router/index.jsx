import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main/Main";
import Movie from "../pages/Movie";
import Ticket from "../pages/Ticket";
import Theater from "../pages/Theater";
import Login from "../pages/Auth/Login/Login";
import Join from "../pages/Auth/Join/Join";
import MypageLayout from "../layouts/mypage/MypageLayout";
import MypageBooking from "../pages/Mypage/Booking/MypageBooking";
import MyUpdate from "../pages/Mypage/MyUpdate/MyUpdate";
import PasswordChange from "../pages/Mypage/PasswordChange/PasswordChange";

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
        path: "/login",
        element: <Login />
      },
      {
        path: "/join",
        element: <Join />
      }
    ],
  },
  {
    element: <MypageLayout />,
    path: "/mypage",
    children: [
      {
        path: "booking",
        element: <MypageBooking />
      },
      {
        path: "update",
        element: <MyUpdate />
      },
      {
        path: "password",
        element: <PasswordChange />
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
