import Header from "./Header";
import styled from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styled.main}>{children}</main>
    </>
  )
};

export default Layout;