import { useNavigate } from "react-router";
import styled from "./nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
  const navList = [
    {
      id: 1,
      name: "영화",
      href: "/movie",
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
      name: "극장",
      href: "/theater",
    },
  ];

  return (
    <nav className={styled.nav}>
      <div className={styled.icons}>
        <i className={styled.menu}></i>
        <i className={styled.search}></i>
      </div>
      <ul className={styled.nav_list}>
        {navList.map((item, index) => {
          return item.name === "" ? (
            <li className={`${styled.nav_item} ${styled.logo}`}>
              <a href={item.href}>
                <img src="/images/logo.png" />
              </a>
            </li>
          ) : (
            <li
              className={styled.nav_item}
              key={index}
              onClick={navigate(item.href)}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div className={styled.icons}>
        <i className={styled.schedule}></i>
        <a href="/mypage">
          <i className={styled.mypage}></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
