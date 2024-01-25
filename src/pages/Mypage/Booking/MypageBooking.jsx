import { Box, Typography } from '@mui/material';
import styled from './mypage.booking.module.css';
import TicketList from '../../../components/mypage/TicketList/TicketList';
import SearchBar from '../../../components/mypage/SearchBar/SearchBar';


const MypageBooking = () => {
  return (
    <Box className={styled.booking}>
      <Typography variant="h5" marginBottom="35px">예매 내역</Typography>
      <Box className={styled.booking_tab}>
        <Box>예매</Box>
      </Box>
      <SearchBar />
      <Box padding="20px 0">
        <TicketList />
      </Box>
    </Box>
  )
};

export default MypageBooking;
