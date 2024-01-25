import { useFormState } from "react-hook-form";
import MInputText from "../../../common/MInputText/MInputText";
import ErrorTypography from "../../../form/ErrorTypography/ErrorTypography";

const NicknameColumn = ({ control, value }) => {
  const formState = useFormState({
    control,
    name: 'nickname'
  });

  return (
    <>
      <MInputText 
        control={control}
        name="nickname" 
        defaultValue={value}
        rules={{
          required: true,
          minLength: 2,
          maxLength: 20,
        }}
      />
      {formState.errors.nickname && (
        <ErrorTypography>별명을 입력해주세요.(2 ~ 20자리)</ErrorTypography>
      )}
    </>
  )
};

export default NicknameColumn;
