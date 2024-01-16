import { Outlet } from "react-router";
import Header from "./Header";
import styled from './layout.module.css';

const Layout = () => (
  <>
    <Header />
    <main className={styled.main}><Outlet/></main>
  </>
);

export default Layout;