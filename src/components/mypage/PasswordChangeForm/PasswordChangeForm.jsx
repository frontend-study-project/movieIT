import { Box, Typography } from '@mui/material';
import { useFetchUserQuery, useUpdateUserMutation } from '../../../hooks/useAuth';
import { Suspense } from 'react';
import Loading from '../../common/Loading/Loading';
import MypageForm from '../MypageForm/MypageForm';
import PasswordColumn from './PasswordColumn';
import styled from './password.change.form.module.css';

const PasswordChangeForm = () => {
  const updateUser = useUpdateUserMutation();
  const { data } = useFetchUserQuery();
  const columns = [
    {
      key: 'password',
      label: '현재 비밀번호',
      component: (value, control) => (
        <PasswordColumn
          name="password"
          control={control}
          value={value}
        />
      ),
    },
    {
      key: 'newPassword',
      label: '새 비밀번호',
      component: (value, control) => (
        <PasswordColumn
          name="newPassword"
          notice="※ 영문,숫자,특수문자 중 2가지 이상 조합하여 8자리 이상으로 입력해주세요."
          control={control}
          value={value}
        />
      ),
    },
    {
      key: 'newPasswordConfirm',
      label: '새 비밀번호 재입력',
      component: (value, control) => (
        <PasswordColumn
          name="newPasswordConfirm"
          notice="※ 비밀번호 확인을 위해 한 번 더 입력해 주시길 바랍니다."
          control={control}
          value={value}
        />
      ),
    },
  ];

  const handleUpdate = (form) => {
    updateUser.mutate({
      ...form,
      id: data?.id
    });
  };

  return (
    <Box>
      <Typography fontSize="13px" marginBottom="5px" marginTop="10px">*현재 비밀번호를 입력한 후 새로 사용할 비밀번호를 입력하세요.</Typography>

      <Suspense fallback={<Loading />}>
        <MypageForm 
          columns={columns} 
          data={data} 
          handleUpdate={handleUpdate}
          footer={(
            <Box className={styled.password_notice}>
              <Typography>생년월일, 전화번호 등 개인 정보와 관련된 숫자, 연속된 숫자와 같이 쉬운 비밀번호는 다른 사람이 쉽게 알아낼 수 있으니 사용을 자제해 주세요.</Typography>
              <Typography>비밀번호는 3-6개월마다 꼭 바꿔 주세요.</Typography>
              <Typography>비밀번호 설정 시 사용가능한 특수문자는 ~ ! @ # $ % ^ & * + = - ? _ 입니다.</Typography>
            </Box>
          )}
        />
      </Suspense>
    </Box>
  )
};

export default PasswordChangeForm;
