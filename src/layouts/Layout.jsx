import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import styled from './layout.module.css';

const Layout = () => (
  <>
    <Header />
    <main className={styled.main}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
