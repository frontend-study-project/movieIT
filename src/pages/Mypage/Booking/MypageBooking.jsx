import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import styled from './mypage.booking.module.css';
import TicketList from '../../../components/mypage/TicketList/TicketList';


const MypageBooking = () => {
  return (
    <Box className={styled.booking}>
      <Typography variant="h5" marginBottom="35px">예매 내역</Typography>
      <Box className={styled.booking_tab}>
        <Box>예매</Box>
      </Box>
      <Box className={styled.booking_search}>
        <Box component="span" fontWeight="bold" fontSize="13px" display="flex" alignItems="center">구분</Box>
        <Box>
          <RadioGroup
            defaultValue="B"
            name="radBokd"
            className={styled["booking_search-radio-group"]}
            row
          >
            <FormControlLabel style={{ letterSpacing: "-1px" }} value="B" control={<Radio size="small" />} label="예매내역" />
            <FormControlLabel value="E" control={<Radio size="small" />} label="지난내역" />
          </RadioGroup>
        </Box>
        <Box className={styled["booking_search-date"]} display="flex">
          <Select
            size="small"
            value="2024년 1월"
            style={{ height: '32px', background: '#fff', marginRight: '10px' }}
          >
            <MenuItem value="2024년 1월">2024년 1월</MenuItem>
          </Select>
          <Button
            className={styled.search_button}
            variant="outlined"
            size="small" 
            startIcon={<i className={styled.search} />}
            style={{ height: '32px', color: "#494949", fontSize: '14px', borderColor: 'rgba(0, 0, 0, 0.23)', background: '#fff' }}
          >조회</Button>
        </Box>
      </Box>
      <Box padding="20px 0">
        <TicketList />
      </Box>
    </Box>
  )
};

export default MypageBooking;
