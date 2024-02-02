import { Box, Typography } from '@mui/material';
import styled from './mypage.booking.module.css';
import TicketList from '../../../components/mypage/TicketList/TicketList';
import SearchBar from '../../../components/mypage/SearchBar/SearchBar';
import { useState } from 'react';
import { getPreviousMonthsData } from '../../../lib/date';
import { useDispatch } from 'react-redux';
import { setSearch as setSearchValue } from '../../../store/slice/search';

const MypageBooking = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    type: 'B',
    date: getPreviousMonthsData()[0],
  });

  const changeSearch = (event) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSearch = () => {
    dispatch(setSearchValue(search));
  };

  return (
    <Box className={styled.booking}>
      <Typography variant="h5" marginBottom="35px">예매 내역</Typography>
      <Box className={styled.booking_tab}>
        <Box>예매</Box>
      </Box>
      <SearchBar search={search} changeSearch={changeSearch} handleSearch={handleSearch} />
      <Box padding="20px 0">
        <TicketList />
      </Box>
    </Box>
  )
};

export default MypageBooking;
