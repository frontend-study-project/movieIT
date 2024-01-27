import { useMemo } from "react";
import Nav from "./Nav";
import styled from './header.module.css';
import { useLocation } from 'react-router-dom';
import AuthNav from "./AuthNav";

const isSub = (pathname) => pathname !== '/';

const Header = () => {
  const { pathname } = useLocation();
  const className = useMemo(() => (
    `${styled.header} ${styled.main} ${!isSub(pathname) ? styled.header_background : ''}`
  ), [pathname]);

  return (
    <header className={className}>
      <AuthNav />
      <Nav isSub={isSub(pathname)} />
    </header>
  )
};

export default Header;