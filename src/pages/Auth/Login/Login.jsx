import { Box, Typography } from '@mui/material';
import styled from './login.module.css';
import LoginForm from '../../../components/auth/LoginForm/LoginForm';

const Login = () => (
  <Box className={styled.login}>
    <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">로그인</Typography>
    <LoginForm />
  </Box>
);

export default Login;
