import { Box, Typography } from "@mui/material";
import styled from './mypage.nav.module.css';

const MypageNav = () => {
  return (
    <Box className={styled.nav}>
      <Box className={styled.title} bgcolor="#3a3a3a">
        <Typography color="#fff">마이페이지</Typography>
      </Box>
      <Box className={styled.nav_list} component="ul">
        <Box className={styled["nav_main-link"]}>
          <a>예매내역</a>
        </Box>
        <Box className={styled["nav_main-link"]}>
          <a>회원정보</a>
          <Box component="ul" className={styled["nav_sub-link"]}>
            <a>개인정보 수정</a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default MypageNav;
