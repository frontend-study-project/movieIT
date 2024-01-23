import { useNavigate } from "react-router";
import styled from "./nav.module.css";
import { Link } from "react-router-dom";

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
      href: "/ticket",
    },
    {
      id: 3,
      name: "",
      href: "/",
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
        {navList.map((item) => {
          return item.name === "" ? (
            <li key={item.id} className={`${styled.nav_item} ${styled.logo}`}>
              <Link href={item.href}>
                <img src="/images/logo.png" />
              </Link>
            </li>
          ) : (
            <li
              key={item.id}
              className={styled.nav_item}
              onClick={() => navigate(item.href)}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styled.icons}>
        <i className={styled.schedule}></i>
        <Link href="/mypage">
          <i className={styled.mypage}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
