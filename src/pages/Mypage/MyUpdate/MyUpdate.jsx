import { Box, Typography } from "@mui/material";
import PrivacyInfo from "../../../components/mypage/PrivacyInfo/PrivacyInfo";

const MyUpdate = () => {
  return (
    <Box>
      <Typography variant="h5" marginBottom="35px">개인정보 수정</Typography>
      <PrivacyInfo />
    </Box>
  )
};

export default MyUpdate;
