import { useDispatch } from 'react-redux';
import styled from './commonItem.module.css';
import { setAlert } from '../../../store/slice/alert';
import { useState } from 'react';
const SelectItem = ({
  id,
  label,
  count,
  onAddCount,
  onMinusCount 
}) => {
  const dispatch = useDispatch();
  const [alertShown, setAlertShown] = useState(false); 
  const textList = {
    '경로': {title: '◆ 경로 : 만 65세 이상(신분증)', content: '경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 본인신분증을 제시해 주시기 바랍니다(*미지참시 입장 제한)\n\n *경로선택 시 추가 할인이 제한될 수 있습니다'},
    '우대': {title: '※만 65세이상 고객님께서는 [경로]발권 부탁드립니다(*지점별 상이)', content: '◆ 우대요금은 장애인 고객에게 적용되며, 상영관 입장 시 본인확인 증빙서류를 제시해 주시기 바랍니다.(미지참 시 입장 제한)\n\n- 장애인: 1~6급 (복지카드)- 국가유공자: (국가유공자증)\n\n위 항목 외 지점별 우대요금 추가적용 대상은 직원확인 후 발권이 가능합니다*우대선택 시 추가 할인이 제한될 수 있습니다.'},
  }

  const handleAddCount = () => {
    onAddCount(id);
    if ((label === '경로' || label === '우대') && !alertShown) {
      setAlertShown(true);
      showAlert(label);
    }
  }

  const handleMinusCount = () => {
    onMinusCount(id);
  }

  const showAlert = (label) => {
    dispatch(setAlert({
      open: true,
      title: textList[label].title,
      content: textList[label].content,
      btnList: [{autoFocus: true, txt: '확인', clickFn: () => {}}]
    }))
  }

  return <div className={styled.box_count}>
    <label htmlFor={id}>{label}</label>
    <button type="button" className={styled.btn_minus} onClick={handleMinusCount}>-</button>
    <input type="number" className={styled.num_count} value={count[id]} id={id} min={0} max={8} readOnly />
    <button type="button" className={styled.btn_plus} onClick={handleAddCount}>+</button>
  </div>
}
export default SelectItem;