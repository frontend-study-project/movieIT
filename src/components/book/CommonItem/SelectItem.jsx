import styled from './commonItem.module.css';
const SelectItem = ({
  id,
  label,
  count,
  onAddCount,
  onMinusCount 
}) => {
  const handleAddCount = () => {
    onAddCount(id);
  }

  const handleMinusCount = () => {
    onMinusCount(id);
  }

  return <div className={styled.box_count}>
    <label htmlFor={id}>{label}</label>
    <button type="button" className={styled.btn_minus} onClick={handleMinusCount}>-</button>
    <input type="number" className={styled.num_count} value={count[id]} id={id} min={0} max={8} readOnly />
    <button type="button" className={styled.btn_plus} onClick={handleAddCount}>+</button>
  </div>
}
export default SelectItem;