import './components.css';

const SeatItem = ({
  seatType,
  seatDesc,
  seatNum
}) => {
  return <span className={`seat_condition ${seatType}`} title={seatDesc}>{seatNum}</span>
}
export default SeatItem;