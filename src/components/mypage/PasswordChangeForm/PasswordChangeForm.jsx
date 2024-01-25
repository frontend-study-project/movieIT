import { Box, Typography } from '@mui/material';
import { useFetchUserQuery, useUpdateUserMutation } from '../../../hooks/useAuth';
import { Suspense } from 'react';
import Loading from '../../common/Loading/Loading';
import MypageForm from '../MypageForm/MypageForm';

const PasswordChangeForm = () => {
  const updateUser = useUpdateUserMutation();
  const { data } = useFetchUserQuery();
  const columns = [
    {
      key: 'id',
      label: '아이디*',
      component: (value) => value,
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
        />
      </Suspense>
    </Box>
  )
};

export default PasswordChangeForm;
