import styled from "./components.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

const SlideList = ({ list, year, moveX, yearHandler }) => {
  const nowHour = new Date().getHours();

  const [count, setCount] = useState({
    date: {move: 0, selected: 0},
    hour: {move: nowHour > 13 ? -13 : -nowHour, selected: -nowHour}
  });

  const handleDisabledPrev = () => {
    if (year) {
      return count.date.move >= 0;
    } else {
      return count.hour.move >= 0;
    }
  }

  const handleDisabledNext = () => {
    if (year) {
      return count.date.move <= -16;
    } else {
      return count.hour.move <= -13;
    }
  }

  const handleSelected = () => {
    if (year) {
      return -count.date.selected;
    } else {
      return -count.hour.selected;
    }
  }

  const handleTranslateX = () => {
    if (year) {
      return count.date.move * moveX;
    } else {
      return count.hour.move * moveX;
    }
  }

  const moveToDirect = (idx) => {
    if (year) {
      setCount(prev => {
        return {
          ...prev,
          date: {move: prev.date.move, selected: -idx}
        }
      });
    } else {
      setCount(prev => {
        return {
          ...prev,
          hour: {move: prev.hour.move, selected: -idx}
        }
      });
    }
  }

  const moveToPrev = () => {
    if (year) {
      if (count.date.move >= 0) return;
      setCount(prev => {
        return {
          ...prev,
          date: {selected: prev.date.selected, move: prev.date.move + 1}
        }
      });
    } else {
      if (count.hour.move >= 0) return;
      console.log(count.hour.move * moveX)
      setCount(prev => {
        return {
          ...prev,
          hour: {selected: prev.hour.selected, move: prev.hour.move + 1}
        }
      });
    }
  };

  const moveToNext = () => {
    if (year) {
      if (count.date.move <= -16) return;
      setCount(prev => {
        return {
          ...prev,
          date: {selected: prev.date.selected, move: prev.date.move - 1}
        }
      });
    } else {
      if (count.hour.move <= -13) return;
      setCount(prev => {
        return {
          ...prev,
          hour: {selected: prev.hour.selected, move: prev.hour.move - 1}
        }
      });
    }
  };
  console.log();
  // console.log([...list]);
  return (
    <div className={styled.wrap_slide}>
      <button
        type="button"
        color="disabled"
        className={styled.btn_prev}
        onClick={moveToPrev}
      >
        <ArrowBackIosIcon fontSize="small" sx={{ fontSize: 16 }} color={handleDisabledPrev() ? 'disabled' : ''}>
          이전
        </ArrowBackIosIcon>
      </button>
      {year && <strong className={styled.txt_year}>{year}</strong>} {/* year이 아닌 list[count.date].id를 넣고 싶음 */}
      <div className={styled.inner_slide}>
        <ul
          className={styled.list_slide}
          style={{transform: `translateX(${handleTranslateX()}px)`}}
        >
          {list.map((item, idx) => (
            <li
              key={item.id}
              className={`${styled.item_slide} ${idx === handleSelected() ? styled.on : ""}`}
            >
              <button type="button" onClick={() => moveToDirect(idx)}>
                {item.num && <em className={styled.txt_num}>{item.num}</em>}
                {item.txt && <span className={styled.tit_txt}>{item.txt}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className={styled.btn_next} onClick={moveToNext}>
        <ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }} color={handleDisabledNext() ? 'disabled' : ''}>
          다음
        </ArrowForwardIosIcon>
      </button>
    </div>
  );
};
export default SlideList;
