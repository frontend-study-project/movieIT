import styled from './mypage.layout.module.css';
import layout from '../layout.module.css';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import MypageNav from './MypageNav';

const MypageLayout = () => (
  <>
    <Header />
    <main className={`${layout.main} ${styled.main}`}>
      <MypageNav />
      <Outlet />
    </main>
  </>
)

export default MypageLayout;
