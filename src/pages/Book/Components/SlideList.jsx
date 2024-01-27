import './components.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideList = ({
  list,
  yearInfo
}) => {
  return <div className='wrap_slide'>
    <button type="button" className='btn_before'><ArrowBackIosIcon fontSize="small" sx={{ fontSize: 14 }}>이전</ArrowBackIosIcon></button>
    {yearInfo && <strong className='txt_year'>2024.01</strong>}
    <div className='inner_slide'>
      <ul className='list_slide' >
        {
          list.map((item, idx) => <li key={idx} className='item_slide'>
            <button type='button' className={idx === 0 ? 'on' : null}>
              {item.num && <em className='txt_num'>{item.num}</em>}
              {item.txt && <span className='tit_txt'>{item.txt}</span>}
            </button>
          </li>)
        }
      </ul>
    </div>
    <button type="button" className='btn_next'><ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }}>다음</ArrowForwardIosIcon></button>
  </div>
}
export default SlideList;