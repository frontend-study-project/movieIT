import { Box, Typography } from "@mui/material";
import PasswordChangeForm from "../../../components/mypage/PasswordChangeForm/PasswordChangeForm";

const PasswordChange = () => (
  <Box>
    <Typography variant="h5" marginBottom="35px">비밀번호 변경</Typography>
    <PasswordChangeForm />
  </Box>
);

export default PasswordChange;
