import styled from './bookItem.module.css';
const SelectItem = ({
  id,
  label,
  count,
  onAddCount 
}) => {
  const handleAddCount = () => {
    onAddCount(id);
  }

  return <div className={styled.box_count}>
    <label htmlFor={id}>{label}</label>
    <button type="button" className={styled.btn_minus}>-</button>
    <input type="number" className={styled.num_count} value={count[id]} id={id} min={0} max={8} readOnly />
    <button type="button" className={styled.btn_plus} onClick={handleAddCount}>+</button>
  </div>
}
export default SelectItem;