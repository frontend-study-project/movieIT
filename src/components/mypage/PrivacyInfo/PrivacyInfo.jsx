import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';
import Loading from '../../common/Loading/Loading';
import { useFetchUserQuery, useUpdateUserMutation } from '../../../hooks/useAuth';
import NicknameColumn from './PrivacyInfoTable/NicknameColumn';
import PasswordColumn from './PrivacyInfoTable/PasswordColumn';
import MypageForm from '../MypageForm/MypageForm';

const PrivacyInfo = () => {
  const updateUser = useUpdateUserMutation();
  const { data } = useFetchUserQuery();
  const columns = [
    {
      key: 'id',
      label: '아이디*',
      component: (value) => value,
    },
    {
      key: 'nickname',
      label: '닉네임*',
      component: (value, control) => (
        <NicknameColumn 
          control={control} 
          value={value}
        />
      ),
    },
    {
      key: 'password',
      label: '비밀번호*',
      component: () => (
        <PasswordColumn />
      ),
    },
  ];

  const handleUpdate = ({ nickname }) => {
    updateUser.mutate({
      nickname,
      id: data?.id
    });
  };

  return (
    <Box>
      <Typography variant="h6" color="#503396" fontWeight="bold">기본정보</Typography>
      <Typography fontSize="13px" marginBottom="5px" marginTop="10px">*회원님의 정보를 정확히 입력해주세요.</Typography>

      <Suspense fallback={<Loading />}>
        <MypageForm
          columns={columns} 
          data={data} 
          handleUpdate={handleUpdate}
        />
      </Suspense>
    </Box>
  )
};

export default PrivacyInfo;
