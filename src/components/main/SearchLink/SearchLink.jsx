import { Box, Button, TextField } from "@mui/material";
import styled from './search-link.module.css';
import { styled as mStyled } from '@mui/material/styles';
import SearchIcon from "../../common/icon/SearchIcon";

const CssTextField = mStyled(TextField)({
  '&': {
    justifyContent: 'center'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#292929',
  },
  '& .MuiInput-underline:hover:before': {
    borderColor: '#909090',
  },
});

const SearchLink = () => {
  return (
    <Box display="flex" className={styled["search-link"]}>
      <Box display="flex" justifyContent="center">
        <CssTextField
          className={styled["search-input"]} 
          variant="standard" 
          size="small"
          placeholder="영화명을 입력해주세요"
          hiddenLabel
          InputProps={{
            endAdornment: (
              <SearchIcon width={30} height={27} />
            )
          }}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button style={{ color: "#fff" }} startIcon={<i className={styled.schedule} />}>상영시간표</Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button style={{ color: "#fff" }} startIcon={<i className={styled.box} />}>박스오피스</Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button style={{ color: "#fff" }} startIcon={<i className={styled.booking} />}>빠른예매</Button>
      </Box>
    </Box>
  )
};

export default SearchLink;
