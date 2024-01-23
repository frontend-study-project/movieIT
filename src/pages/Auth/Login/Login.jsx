import { Box, Button, Divider, Typography } from '@mui/material';
import styled from './login.module.css';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../hooks/useAuth';
import MInputText from '../../../components/common/MInputText/MInputText';
import { Link } from 'react-router-dom';

const Login = () => {
  const login = useLoginMutation();
  const { 
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const handleLogin = (form) => {
    login.mutate(form);
  };

  return (
    <Box className={styled.login}>
      <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">로그인</Typography>

      <form className={styled.form} onSubmit={handleSubmit(handleLogin)}>
        <Box bgcolor="#fff">
          <MInputText 
            control={control}
            name="id" 
            label="아이디를 입력해주세요" 
            variant="outlined"
            fullWidth
            rules={{
              required: true,
              minLength: 2,
              maxLength: 20,
            }}
          />
        </Box>
        <Box bgcolor="#fff">
          <MInputText 
            control={control}
            name="password" 
            label="비밀번호를 입력해주세요" 
            variant="outlined"
            fullWidth
            rules={{
              required: true,
              minLength: 8,
              maxLength: 20,
            }}
          />
        </Box>

        <Box marginBlock="20px">
          <Divider light={false} />
        </Box>

        <Box className={styled.form_buttons}>
          <Button type="submit" variant="contained" size="large" fullWidth>로그인</Button>
          <Button href="/join" LinkComponent={Link} variant="outlined" size="large" fullWidth>회원가입</Button>
        </Box>
      </form>
    </Box>
  )
};

export default Login;
