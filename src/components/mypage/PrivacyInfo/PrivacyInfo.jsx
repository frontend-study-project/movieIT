import { Box, Typography } from '@mui/material';
import PrivacyInfoTable from './PrivacyInfoTable/PrivacyInfoTable';
import { Suspense } from 'react';
import Loading from '../../common/Loading/Loading';

const PrivacyInfo = () => (
  <Box>
    <Typography variant="h4" color="#767676">기본정보</Typography>
    <Typography fontSize="13px" marginBottom="5px">회원님의 정보를 정확히 입력해주세요.</Typography>

    <Suspense fallback={<Loading />}>
      <PrivacyInfoTable />
    </Suspense>
  </Box>
);

export default PrivacyInfo;
