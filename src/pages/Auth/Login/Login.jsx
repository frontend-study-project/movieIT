import { Box, Typography } from '@mui/material';
import styled from './login.module.css';
import LoginForm from '../../../components/auth/LoginForm/LoginForm';
import { useFetchUserQuery } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { data: user } = useFetchUserQuery();
  const navigate = useNavigate();
  
  if (user) {
    navigate('/', { replace: true });
  }

  return (
    <Box className={styled.login}>
      <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">로그인</Typography>
      <LoginForm />
    </Box>
  )
};

export default Login;
