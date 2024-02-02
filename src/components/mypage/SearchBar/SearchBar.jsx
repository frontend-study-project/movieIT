import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import styled from './search.module.css';
import SearchIcon from '../../common/icon/SearchIcon';
import { getPreviousMonthsData } from '../../../lib/date';

const SearchBar = ({ search, changeSearch, handleSearch }) => {
    return (
    <Box className={styled.booking_search}>
      <Box component="span" fontWeight="bold" fontSize="13px" display="flex" alignItems="center">구분</Box>
      <Box>
        <RadioGroup
          className={styled["booking_search-radio-group"]}
          name="type"
          row
          defaultValue="B"
          value={search.type}
          onChange={changeSearch}
        >
          <FormControlLabel 
            control={<Radio size="small" />} 
            value="B" 
            label="예매내역"
            style={{ letterSpacing: "-1px" }} 
          />
          <FormControlLabel 
            control={<Radio size="small" />} 
            value="E" 
            label="지난내역"
          />
        </RadioGroup>
      </Box>
      <Box className={styled["booking_search-date"]} display="flex">
        <Select
          name="date"
          size="small"
          value={search.date}
          style={{ height: '32px', background: '#fff', marginRight: '10px' }}
          onChange={changeSearch}
          disabled={search.type === 'B'}
        >
          {getPreviousMonthsData().map((date, index) => (
            <MenuItem key={index} value={date}>{date}</MenuItem>
          ))}
        </Select>
        <Button
          className={styled.search_button}
          variant="outlined"
          size="small" 
          startIcon={<SearchIcon />}
          style={{ 
            height: '32px', 
            color: "#494949", 
            fontSize: '14px', 
            borderColor: 'rgba(0, 0, 0, 0.23)', 
            background: '#fff'
          }}
          onClick={handleSearch}
        >
          조회
        </Button>
      </Box>
    </Box>
  )
};

export default SearchBar;
