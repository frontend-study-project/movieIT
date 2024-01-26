import { Box, Button } from '@mui/material';
import styled from './mypage.form.module.css';
import MypageTable from '../MypageTable/MypageTable';
import { useForm } from 'react-hook-form';

const MypageForm = ({ columns, data, handleUpdate, footer }) => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' })

  return (
    <Box className={styled.table_container}>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <MypageTable columns={columns} data={data} control={control} />
        {footer}
        <Box display="flex" justifyContent="center" gap="10px" marginTop="50px">
          <Button size="large" variant="outlined" onClick={reset}>취소</Button>
          <Button size="large" type="submit" variant="contained">등록</Button>
        </Box>
      </form>
    </Box>
  );
};

export default MypageForm;
