import { Box, Typography } from '@mui/material';
import styled from './login.module.css';
import LoginForm from '../../../components/auth/LoginForm/LoginForm';
import { useFetchUserQuery } from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../store/slice/book';

const Login = () => {
  const { state } = useLocation(); 
  const { data: user } = useFetchUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      if (state) {
        dispatch(setPage(2));
        navigate(state);
      } else {
        navigate('/', { replace: true });
      }
    } 
  }, [user, navigate]);

  return (
    <Box className={styled.login}>
      <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">로그인</Typography>
      <LoginForm />
    </Box>
  )
};

export default Login;
