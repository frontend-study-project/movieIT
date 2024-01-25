const SelectItem = ({
  id,
  label
}) => {
  return <div className="box_count">
    <label htmlFor={id}>{label}</label>
    <button type="button" className="btn_minus">-</button>
    <input type="number" className="num_count" value={0} id={id} min={0} max={8} readOnly />
    <button type="button" className="btn_plus">+</button>
  </div>
}
export default SelectItem;