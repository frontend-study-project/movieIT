import styled from "./slide.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const SlideTime = ({ moveX, hour, date, onChangeHour }) => {
  const nowMinutes = new Date().getMinutes();

  const moveCondition = () => {
    if ((hour > 13) || (hour === 0)) {
      return -13;
    }

    return -(hour - 1);
  }
  const selectedCondition = () => {
    if (!hour) {
      return nowMinutes >= 55 ? -1 :-24;
    }
    
    return -hour
  }
  
  const [count, setCount] = useState({
    move: moveCondition(), selected: selectedCondition()
  });
  const list = Array.from({length: 24}).map((_, idx) => idx + 1);

  const handleDisabledPrev = () => {
    return count.move >= 0 ? 'disabled' : '';
  }

  const handleDisabledNext = () => {
    return count.move <= -13 ? 'disabled' : '';
  }

  const moveToDirect = (idx) => {
    setCount(prev => {
      return {
        ...prev,
        move: prev.move, selected: -idx
      }
    });
  }

  const moveToPrev = () => {
    if (count.move >= 0) return;

    setCount(prev => {
      return {
        ...prev,
        selected: prev.selected, move: prev.move + 1
      }
    });
  };

  const moveToNext = () => {
    if (count.move <= -13) return;
    setCount(prev => {
      return {
        ...prev,
        selected: prev.selected, move: prev.move - 1
      }
    });
  };

  const handleSlideItemClick = (idx) => {
    moveToDirect(idx);
    onChangeHour(+idx);
  }

  const hourDisabledCondition = (idx) => {
    let nowHour = new Date().getHours() === 0 ? 24 : new Date().getHours();

    if ( Date.now() < new Date(date)) return 1;

    if (nowMinutes >= 55) nowHour++;

    return nowHour <= idx + 1;
  }

  return (
    <div className={styled.wrap_slide}>
      <button
        type="button"
        color="disabled"
        className={styled.btn_prev}
        onClick={moveToPrev}
      >
        <ArrowBackIosIcon fontSize="small" sx={{ fontSize: 16 }} color={handleDisabledPrev()}>
          이전
        </ArrowBackIosIcon>
      </button>
      <div className={styled.inner_slide}>
        <ul
          className={styled.list_slide}
          style={{transform: `translateX(${count.move * moveX}px)`}}
        >
          {list.map((item, idx) => (
            <li
              key={item}
              className={`${styled.item_slide} ${item === -count.selected ? styled.on : ""}`}
            >
              <button type="button" onClick={() => handleSlideItemClick(item)} style={{opacity: `${hourDisabledCondition(idx) ? 1 : 0.5}`}} disabled={`${hourDisabledCondition(idx) ? '' : 'disabled'}`}>
                <em className={styled.txt_num}>{item}</em>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className={styled.btn_next} onClick={moveToNext}>
        <ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }} color={handleDisabledNext()}>
          다음
        </ArrowForwardIosIcon>
      </button>
    </div>
  );
};
export default SlideTime;
