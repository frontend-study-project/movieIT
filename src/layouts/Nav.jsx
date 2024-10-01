import { useNavigate } from "react-router";
import styled from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ isSub }) => {
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
      href: "/",
    },
    {
      id: 4,
      name: '극장',
      href: '/theater',
    },
    {
      id: 5,
      name: '마이페이지',
      href: '/mypage/booking',
    },
  ];

  return (
    <nav className={`${styled.nav} ${isSub ? styled.sub : ''}`}>
      <div className={styled.icons}>
        <i className={styled.menu}></i>
      </div>
      <ul className={styled.nav_list}>
        {navList.map((item) => {
          return item.name === "" ? (
            <li key={item.id} className={`${styled.nav_item} ${styled.logo}`}>
              <Link to={item.href} onClick={() => {
                if (item.id === 2) {
                  navigate('/book')
                }
                }}>
                <img src={`/images/logo${isSub ? '' : '-white'}.png`} />
              </Link>
            </li>
          ) : (
            <li
              key={item.id}
              className={styled.nav_item}
              onClick={() => navigate(item.href)}
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styled.icons}>
        <Link to="/mypage/booking">
          <i className={styled.mypage}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
