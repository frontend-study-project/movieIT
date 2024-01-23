import { Box, Button, Divider } from '@mui/material';
import styled from './login.form.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../../hooks/useAuth';
import MInputText from '../../common/MInputText/MInputText';

const LoginForm = () => {
  const login = useLoginMutation();
  const { 
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const handleLogin = (form) => {
    login.mutate(form);
  };

  return (
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
          type="password"
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
  )
};

export default LoginForm;
