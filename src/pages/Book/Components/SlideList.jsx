import styled from "./components.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const SlideList = ({ list, year, moveX, yearHandler }) => {

  const [count, setCount] = useState({
    date: 0,
    hour: 0
  });

  const moveToPrev = () => {
    if (year) {
      setCount(prev => {
        return {
          ...prev,
          date: prev.date + 1
        }
      });
      // yearHanlder(list[count.date]);
    } else {
      setCount(prev => {
        return {
          ...prev,
          hour: prev.hour + 1
        }
      });
    }
  };
  const moveToNext = () => {
    if (year) {
      setCount(prev => {
        return {
          ...prev,
          date: prev.date - 1
        }
      });
      // yearHanlder(list[count.date].id);
    } else {
      setCount(prev => {
        return {
          ...prev,
          hour: prev.hour - 1
        }
      });
    }
  };
  // console.log(yearHanlder);
  return (
    <div className={styled.wrap_slide}>
      <button
        type="button"
        color="disabled"
        className={styled.btn_prev}
        onClick={moveToPrev}
      >
        <ArrowBackIosIcon fontSize="small" sx={{ fontSize: 16 }}>
          이전
        </ArrowBackIosIcon>
      </button>
      {year && <strong className={styled.txt_year}>{year}</strong>}
      <div className={styled.inner_slide}>
        <ul
          className={styled.list_slide}
          style={{transform: `translateX(${moveX * (year ? count.date : count.hour )}px)`}}
        >
          {list.map((item, idx) => (
            <li
              key={item.id}
              className={`${styled.item_slide} ${idx === -count.date ? styled.on : ""}`}
            >
              <button type="button">
                {item.num && <em className={styled.txt_num}>{item.num}</em>}
                {item.txt && <span className={styled.tit_txt}>{item.txt}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className={styled.btn_next} onClick={moveToNext}>
        <ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }}>
          다음
        </ArrowForwardIosIcon>
      </button>
    </div>
  );
};
export default SlideList;
