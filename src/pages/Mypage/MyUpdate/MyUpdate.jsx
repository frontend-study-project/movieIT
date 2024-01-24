import { Box, Typography } from "@mui/material";
import styled from './update.module.css';
import PrivacyInfo from "../../../components/mypage/PrivacyInfo/PrivacyInfo";

const MyUpdate = () => {
  return (
    <Box className={styled.update}>
      <Typography variant="h5" marginBottom="35px">개인정보 수정</Typography>
      <PrivacyInfo />
    </Box>
  )
};

export default MyUpdate;
