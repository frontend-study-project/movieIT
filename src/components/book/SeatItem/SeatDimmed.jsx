import styled from './seatItem.module.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const SeatDimmed = () => {
  return <div className={styled.dimmed_seat}>
    <KeyboardDoubleArrowUpIcon sx={{ fontSize: 40 }} />
    <span className={styled.txt_dimmed}>관람인원을 선택하십시오.</span>
  </div>
}
export default SeatDimmed;