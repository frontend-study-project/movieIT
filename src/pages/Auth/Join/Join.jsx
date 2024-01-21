import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import styled from './join.module.css';

const Join = () => {
  return (
    <Box className={styled.login}>
      <Typography variant="h6" fontWeight="700" textAlign="center" marginBottom="30px">회원가입</Typography>

      <form className={styled.form}>
        <Typography textAlign="right" fontSize="12px" marginBottom="-5px">* 필수입력사항</Typography>
        <Box marginBottom="20px">
          <Divider style={{ borderWidth: "1px", borderColor: "black" }} />
        </Box>
        <Box bgcolor="#fff" display="flex">
          <Box className={styled.form_label} width="150px" display="flex" alignItems="center">아이디*</Box>
          <Box flex={1}>
            <TextField 
              id="id"
              label="아이디를 입력해주세요"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width="150px" paddingLeft="10px">
            <Button variant="outlined" size="large" style={{ height: '56px' }} fullWidth>중복확인</Button>
          </Box>
        </Box>
        <Box bgcolor="#fff" display="flex">
          <Box className={styled.form_label} width="150px" display="flex" alignItems="center">별명*</Box>
          <Box flex={1}>
            <TextField 
              id="id"
              label="아이디를 입력해주세요"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width="150px" paddingLeft="10px" />
        </Box>
        <Box bgcolor="#fff" display="flex">
          <Box className={styled.form_label} width="150px" display="flex" alignItems="center">비밀번호*</Box>
          <Box flex={1}>
            <TextField 
              id="password" 
              label="비밀번호를 입력해주세요" 
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width="150px" paddingLeft="10px" />
        </Box>
        <Box bgcolor="#fff" display="flex">
          <Box className={styled.form_label} width="150px" display="flex" alignItems="center">비밀번호확인*</Box>
          <Box flex={1}>
            <TextField 
              id="password" 
              label="비밀번호를 입력해주세요" 
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width="150px" paddingLeft="10px" />
        </Box>

        <Box marginBlock="20px">
          <Divider light={false} />
        </Box>

        <Box className={styled.form_buttons}>
        <Button variant="contained" size="large" fullWidth>회원가입</Button>
        </Box>
      </form>
    </Box>
  )
};

export default Join;
