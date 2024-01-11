import Nav from "./Nav";
import styled from './header.module.css';

const Header = () => {
  return (
    <header className={`${styled.header} ${styled.main}`}>
      <Nav />
    </header>
  )
};

export default Header;