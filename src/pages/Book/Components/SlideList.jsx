import styled from './components.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideList = ({
  list,
  yearInfo
}) => {
  return <div className={styled.wrap_slide}>
    <button type="button" className={styled.btn_before}><ArrowBackIosIcon fontSize="small" sx={{ fontSize: 14 }}>이전</ArrowBackIosIcon></button>
    {yearInfo && <strong className={styled.txt_year}>2024.01</strong>}
    <div className={styled.inner_slide}>
      <ul className={styled.list_slide} >
        {
          list.map((item, idx) => <li key={idx} className={styled.item_slide}>
            <button type='button' className={idx === 0 ? 'on' : null}>
              {item.num && <em className={styled.txt_num}>{item.num}</em>}
              {item.txt && <span className={styled.tit_txt}>{item.txt}</span>}
            </button>
          </li>)
        }
      </ul>
    </div>
    <button type="button" className={styled.btn_next}><ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }}>다음</ArrowForwardIosIcon></button>
  </div>
}
export default SlideList;