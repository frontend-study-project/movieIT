import { Box, Button, Divider, Typography } from "@mui/material";
import styled from './join.form.module.css';
import { useForm } from "react-hook-form";
import { useCheckDuplicateIdMutation, useJoinMutation } from "../../../hooks/useAuth";
import MInputText from "../../common/MInputText/MInputText";
import ErrorTypography from "../../form/ErrorTypography/ErrorTypography";
import { useState } from "react";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { passwordPattern } from "../../../lib/passwordPattern";

const JoinForm = () => {
  const snackbar = useSnackbar();
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const join = useJoinMutation();
  const checkDuplicateId = useCheckDuplicateIdMutation();
  const { 
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
  } = useForm({ mode: 'onChange' });

  const handleJoin = (form) => {
    if (form.password !== form.passwordConfirm) {
      setError('passwordConfirm', { type: 'validate' });
      return;
    }

    clearErrors('passwordConfirm')
    join.mutate(form);
  };

  const handleCheckDuplicateId = async () => {
    const id = getValues('id');

    if (!id) {
      snackbar('아이디를 입력해주세요.', { type: 'warning' });
      return;
    }

    try {
      await checkDuplicateId.mutateAsync(id);
      snackbar('사용가능한 아이디입니다.');
      setDuplicateCheck(true);
    } catch {
      snackbar('사용할 수 없는 아이디입니다.', { type: 'error' });
    }
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
            label="아이디를 입력해주세요(2 ~ 20자리)"
            variant="outlined"
            fullWidth
            onInput={() => setDuplicateCheck(false)}
          />
          {errors.id && (
            <ErrorTypography>아이디를 입력해주세요.(2 ~ 20자리)</ErrorTypography>
          )}
        </Box>
        <Box width="150px" paddingLeft="10px">
          <Button 
            variant="outlined" 
            size="large" 
            style={{ height: '56px' }} 
            fullWidth
            disabled={duplicateCheck}
            onClick={handleCheckDuplicateId}
          >중복확인</Button>
        </Box>
      </Box>
      <Box bgcolor="#fff" display="flex">
        <Box className={styled.form_label} width="150px" display="flex" alignItems="center">별명*</Box>
        <Box flex={1}>
          <MInputText
            name="nickname"
            control={control}
            label="별명을 입력해주세요(2 ~ 20자리)"
            variant="outlined"
            fullWidth
            rules={{
              required: true,
              minLength: 2,
              maxLength: 20,
            }}
          />
          {errors.nickname && (
            <ErrorTypography>별명을 입력해주세요.(2 ~ 20자리)</ErrorTypography>
          )}
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
              pattern: passwordPattern
            }}
          />
          {errors.password && (
            <ErrorTypography>비밀번호를 입력해주세요.(영문,숫자,특수문자 모두 사용하여 최소 8자리 이상)</ErrorTypography>
          )}
        </Box>
        <Box width="150px" paddingLeft="10px" />
      </Box>
      <Box bgcolor="#fff" display="flex">
        <Box className={styled.form_label} width="150px" display="flex" alignItems="center">비밀번호확인*</Box>
        <Box flex={1}>
          <MInputText
            name="passwordConfirm"
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
          {errors.passwordConfirm && (
            <ErrorTypography>
              {
                errors.passwordConfirm.type === 'validate' ? (
                  "비밀번호가 일치하지 않습니다."
                ) : (
                  "비밀번호를 입력해주세요."
                )  
              }
            </ErrorTypography>
          )}
        </Box>
        <Box width="150px" paddingLeft="10px" />
      </Box>

      <Box marginBlock="20px">
        <Divider light={false} />
      </Box>

      <Box className={styled.form_buttons}>
        <Button 
          type="submit" 
          variant="contained" 
          size="large" 
          disabled={!duplicateCheck}
          fullWidth
        >회원가입</Button>
      </Box>
    </form>
  )
};

export default JoinForm;
