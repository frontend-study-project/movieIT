import { Box, Typography } from "@mui/material";
import styled from './mypage.nav.module.css';
import { Link } from "react-router-dom";

const MypageNav = () => {
  return (
    <Box className={styled.nav}>
      <Box className={styled.title} bgcolor="#3a3a3a">
        <Typography color="#fff">마이페이지</Typography>
      </Box>
      <Box className={styled.nav_list} component="ul">
        <Box className={styled["nav_main-link"]}>
          <Link className={styled.link} to="/mypage/booking">예매내역</Link>
        </Box>
        <Box className={styled["nav_main-link"]}>
          <Link className={styled.link} to="/mypage/update">회원정보</Link>
          <Box component="ul" className={styled["nav_sub-link"]}>
            <Link className={styled.link} to="/mypage/update">개인정보 수정</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default MypageNav;
