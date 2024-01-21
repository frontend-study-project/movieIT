import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import styled from './login.module.css';

const Login = () => {
  return (
    <Box className={styled.login}>
      <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">로그인</Typography>

      <form className={styled.form}>
        <Box bgcolor="#fff">
          <TextField 
            id="id"
            label="아이디를 입력해주세요"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box bgcolor="#fff">
          <TextField 
            id="password" 
            label="비밀번호를 입력해주세요" 
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box marginBlock="20px">
          <Divider light={false} />
        </Box>

        <Box className={styled.form_buttons}>
          <Button variant="contained" size="large" fullWidth>로그인</Button>
          <Button variant="outlined" size="large" fullWidth>회원가입</Button>
        </Box>
      </form>
    </Box>
  )
};

export default Login;
