import styled from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styled.nav}>
      <div className={styled.icons}>
        <i className={styled.menu}></i>
        <i className={styled.search}></i>
      </div>
      <ul className={styled.nav_list}>
        <li className={styled.nav_item}><a>영화</a></li>
        <li className={styled.nav_item}><a>예매</a></li>
        <li className={`${styled.nav_item} ${styled.logo}`}><a><img src="/images/logo.png" /></a></li>
        <li className={styled.nav_item}><a>극장</a></li>
      </ul>
      <div className={styled.icons}>
        <i className={styled.schedule}></i>
        <i className={styled.mypage}></i>
      </div>
    </nav>
  )
};

export default Nav;