import { useNavigate } from "react-router";
import styled from "./nav.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "../components/common/icon/SearchIcon";

const Nav = () => {
  const navigate = useNavigate();
  const navList = [
    {
      id: 1,
      name: '영화',
      href: '/movie',
    },
    {
      id: 2,
      name: "예매",
      href: "/book",
    },
    {
      id: 3,
      name: "",
      href: "",
    },
    {
      id: 4,
      name: '극장',
      href: '/theater',
    },
  ];

  return (
    <nav className={styled.nav}>
      <div className={styled.icons}>
        <i className={styled.menu}></i>
        <SearchIcon width={36} height={36} />
      </div>
      <ul className={styled.nav_list}>
<<<<<<< HEAD
        {navList.map((item) => {
          return item.name === "" ? (
            <li key={item.id} className={`${styled.nav_item} ${styled.logo}`}>
              <Link to={item.href}>
=======
        {navList.map((item, index) => {
          return item.name === '' ? (
            <li className={`${styled.nav_item} ${styled.logo}`}>
              <a href={item.href}>
>>>>>>> ddb146cf58218b307f7d0b4ebcd924acbe01f6af
                <img src="/images/logo.png" />
              </Link>
            </li>
          ) : (
<<<<<<< HEAD
            <li
              key={item.id}
              className={styled.nav_item}
              onClick={() => navigate(item.href)}
            >
              <Link to={item.href}>{item.name}</Link>
=======
            <li className={styled.nav_item} key={index} onClick={navigate(item.href)}>
              <a href={item.href}>{item.name}</a>
>>>>>>> ddb146cf58218b307f7d0b4ebcd924acbe01f6af
            </li>
          );
        })}
      </ul>
      <div className={styled.icons}>
        <i className={styled.schedule}></i>
        <Link to="/mypage/booking">
          <i className={styled.mypage}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
