import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import styled from './search.module.css';
import SearchIcon from '../../common/icon/SearchIcon';

const SearchBar = () => {
  return (
    <Box className={styled.booking_search}>
      <Box component="span" fontWeight="bold" fontSize="13px" display="flex" alignItems="center">구분</Box>
      <Box>
        <RadioGroup
          defaultValue="B"
          name="radBokd"
          className={styled["booking_search-radio-group"]}
          row
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
          startIcon={<SearchIcon />}
          style={{ 
            height: '32px', 
            color: "#494949", 
            fontSize: '14px', 
            borderColor: 'rgba(0, 0, 0, 0.23)', 
            background: '#fff'
          }}
        >
          조회
        </Button>
      </Box>
    </Box>
  )
};

export default SearchBar;
