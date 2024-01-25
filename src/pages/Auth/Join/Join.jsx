import { Box, Typography } from "@mui/material";
import styled from './join.module.css';
import JoinForm from "../../../components/auth/JoinForm/JoinForm";

const Join = () => (
  <Box className={styled.join}>
    <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">회원가입</Typography>
    <JoinForm />
  </Box>
);

export default Join;
