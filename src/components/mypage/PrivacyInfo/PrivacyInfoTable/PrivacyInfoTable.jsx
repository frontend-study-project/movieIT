import { Box } from '@mui/material';
import styled from './privacy.table.module.css';
import { useForm } from 'react-hook-form';
import { useFetchUserQuery, useUpdateUserMutation } from '../../../../hooks/useAuth';
import NicknameColumn from './NicknameColumn';
import PasswordColumn from './PasswordColumn';

const PrivacyInfoTable = () => {
  const updateUser = useUpdateUserMutation();
  const { data } = useFetchUserQuery();
  const {
    control,
    handleSubmit
  } = useForm({ mode: 'onChange' })

  const columns = [
    {
      key: 'id',
      label: '아이디',
      component: (value) => value,
    },
    {
      key: 'nickname',
      label: '닉네임',
      component: (value) => (
        <NicknameColumn 
          control={control} 
          value={value}
        />
      ),
    },
    {
      key: 'password',
      label: '비밀번호',
      component: () => (
        <PasswordColumn />
      ),
    },
  ];

  const handleUpdate = (form) => {
    updateUser.mutate({
      ...form,
      id: data.id
    });
  };

  return (
    <Box className={styled.table_container}>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <table className={styled.table}>
          <tbody>
            {columns.map(({ key, label, component }) => (
              <tr key={key}>
                <th>{label}</th>
                <td>{component(data[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </Box>
  )
};

export default PrivacyInfoTable;
