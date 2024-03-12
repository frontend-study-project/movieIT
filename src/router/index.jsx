import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Main from '../pages/Main/Main';
import Movie from '../pages/Movie';
import Book from '../pages/Book';
import Theater from '../pages/Theater';
import Login from '../pages/Auth/Login/Login';
import Join from '../pages/Auth/Join/Join';
import MypageLayout from '../layouts/mypage/MypageLayout';
import MypageBooking from '../pages/Mypage/Booking/MypageBooking';
import MyUpdate from '../pages/Mypage/MyUpdate/MyUpdate';
import MyTheater from '../pages/Mypage/MyTheater/MyTheater';
import PasswordChange from '../pages/Mypage/PasswordChange/PasswordChange';
import MovieDetail from '../components/movie/MovieDetail/MovieDetail';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/movie',
        element: <Movie />,
      },
      {
        path: '/movie/detail',
        element: <MovieDetail/>
      },
      {
        path: '/book',
        element: <Book />,
      },
      {
        path: '/theater',
        element: <Theater />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/join',
        element: <Join />,
      },
    ],
  },
  {
    element: <MypageLayout />,
    path: '/mypage',
    children: [
      {
        path: 'booking',
        element: <MypageBooking />,
      },
      {
        path: 'update',
        element: <MyUpdate />,
      },
      {
        path: 'theater',
        element: <MyTheater />,
      },
      {
        path: 'password',
        element: <PasswordChange />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
