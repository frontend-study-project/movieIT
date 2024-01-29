import { useFormState } from "react-hook-form";
import MInputText from "../../common/MInputText/MInputText";
import ErrorTypography from "../../form/ErrorTypography/ErrorTypography";
import { Box, Typography } from "@mui/material";
import { passwordPattern } from "../../../lib/passwordPattern";

const PasswordColumn = ({ control, value, name, notice = '' }) => {
  const formState = useFormState({
    control,
    name,
  });

  return (
    <>
      <Box display="flex" gap="15px">
        <MInputText 
          type="password"
          control={control}
          name={name}
          defaultValue={value}
          rules={{
            required: true,
            pattern: passwordPattern
          }}
        />
        <Typography 
          display="flex" 
          fontSize="14px" 
          alignItems="center" 
          style={{ color: '#8a8a8a', flex: 1, wordBreak: 'keep-all' }}
        >
          {notice}
        </Typography>
      </Box>
      {
        formState.errors[name] && (formState.errors[name]?.type === 'validate' ? (
          <ErrorTypography>비밀번호가 일치하지 않습니다.</ErrorTypography>
        ) : (
          <ErrorTypography>비밀번호를 입력해주세요.(영문,숫자,특수문자 모두 사용하여 최소 8자리 이상)</ErrorTypography>
        ))
      }
    </>
  )
};

export default PasswordColumn;
