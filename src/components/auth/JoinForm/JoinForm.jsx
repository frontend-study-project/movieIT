import { Box, Button, Divider, Typography } from "@mui/material";
import styled from './join.form.module.css';
import { useForm } from "react-hook-form";
import { useJoinMutation } from "../../../hooks/useAuth";
import MInputText from "../../common/MInputText/MInputText";

const JoinForm = () => {
  const join = useJoinMutation();
  const { 
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const handleJoin = (form) => {
    join.mutate(form);
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit(handleJoin)}>
      <Typography textAlign="right" fontSize="12px" marginBottom="-5px">* 필수입력사항</Typography>
      <Box marginBottom="20px">
        <Divider style={{ borderWidth: "1px", borderColor: "black" }} />
      </Box>
      <Box bgcolor="#fff" display="flex">
        <Box className={styled.form_label} width="150px" display="flex" alignItems="center">아이디*</Box>
        <Box flex={1}>
          <MInputText
            name="id"
            control={control}
            rules={{
              required: true,
              minLength: 2,
              maxLength: 20,
            }}
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
          <MInputText
            name="nickname"
            control={control}
            label="별명을 입력해주세요"
            variant="outlined"
            fullWidth
            rules={{
              required: true,
              minLength: 2,
              maxLength: 20,
            }}
          />
        </Box>
        <Box width="150px" paddingLeft="10px" />
      </Box>
      <Box bgcolor="#fff" display="flex">
        <Box className={styled.form_label} width="150px" display="flex" alignItems="center">비밀번호*</Box>
        <Box flex={1}>
          <MInputText
            name="password"
            control={control}
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
        <Box width="150px" paddingLeft="10px" />
      </Box>
      <Box bgcolor="#fff" display="flex">
        <Box className={styled.form_label} width="150px" display="flex" alignItems="center">비밀번호확인*</Box>
        <Box flex={1}>
          <MInputText
            name="password"
            control={control}
            type="password"
            label="비밀번호를 한번 더 입력해주세요"
            variant="outlined"
            fullWidth
            rules={{
              required: true,
              minLength: 8,
              maxLength: 20,
            }}
          />
        </Box>
        <Box width="150px" paddingLeft="10px" />
      </Box>

      <Box marginBlock="20px">
        <Divider light={false} />
      </Box>

      <Box className={styled.form_buttons}>
        <Button type="submit" variant="contained" size="large" fullWidth>회원가입</Button>
      </Box>
    </form>
  )
};

export default JoinForm;
