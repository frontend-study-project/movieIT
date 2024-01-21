import styled from './mypage.layout.module.css';
import layout from '../layout.module.css';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import MypageNav from './MypageNav';
import { Box } from '@mui/material';

const MypageLayout = () => (
  <>
    <Header />
    <main className={`${layout.main} ${styled.main}`}>
      <MypageNav />
      <Box flex={1}>
        <Outlet />
      </Box>
    </main>
  </>
)

export default MypageLayout;
