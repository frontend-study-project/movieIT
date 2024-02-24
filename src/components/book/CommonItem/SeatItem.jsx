import styled from './commonItem.module.css';

const SeatItem = ({
  seatType,
  seatDesc,
  seatNum
}) => {
  return <span className={`${styled.seat_condition} ${styled[seatType]}`} title={seatDesc}>{seatNum}</span>
}
export default SeatItem;