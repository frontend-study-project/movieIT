import styled from "./slide.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBook } from "../../../store/slice/book";

const SlideTime = ({ hour, date, onChangeHour }) => {
  const dispatch = useDispatch();
  const MOVE_X = 35;
  const NOW = new Date();
  const NOW_HOUR = NOW.getHours();
  const NOW_MINUTES = NOW.getMinutes();
  const list = Array.from({length: 24}).map((_, idx) => idx + 1);
  // 슬라이드 : 움직이는 조건
  const moveCondition = () => {
    if ((hour >= 13) || (hour === 0)) {
      return -13;
    }
    
    return -(hour - 1);
  }
  // 슬라이드 : 선택된 시간 조건
  const selectedCondition = () => {
    if (!hour) {
      return NOW_MINUTES >= 55 ? -1 :-24;
    }

    return -hour;
  }
  // 슬라이드 : 움직일때, 선택될때마다 숫자 업데이트
  const [count, setCount] = useState({
    move: moveCondition(), selected: selectedCondition()
  });
  // 슬라이드 - 이전 버튼 클릭시 - 이동
  const moveToPrev = () => {
    if (count.move >= 0) return;
    
    setCount(prev => {
      return {
        ...prev,
        selected: prev.selected, move: prev.move + 1
      }
    });
  };
  // 슬라이드 - 다음 버튼 클릭시 : 이동
  const moveToNext = () => {
    if (count.move <= -13) return;
    setCount(prev => {
      return {
        ...prev,
        selected: prev.selected, move: prev.move - 1
      }
    });
  };
  // 슬라이드 - 이전 버튼 클릭시 : disabled 여부
  const handleDisabledPrev = () => {
    return count.move === 0 ? 'disabled' : '';
  }
  // 슬라이드 - 다음 버튼 클릭시 : disabled 여부
  const handleDisabledNext = () => {
    return count.move === -13 ? 'disabled' : '';
  }
  // 슬라이드 - 시간 선택시 : 선택된 시간 업데이트
  const handleSlideItemClick = (idx) => {
    setCount(prev => {
      return {
        ...prev,
        move: prev.move, selected: -idx
      }
    });
    // BoxTime의 러닝타임 바꿔줌
    onChangeHour(+idx);
  }
  // 지나간 시간대 disabled 처리 조건
  const hourDisabledCondition = (idx) => {
    // 현재 날짜 이후 날짜는 disabled처리 없음
    if (NOW < new Date(date)) return 1;
    
    let getHour = NOW_HOUR === 0 ? 24 : NOW.getHours();
    
    if (NOW_MINUTES >= 55) getHour++;
    
    return getHour <= idx;
  }
  
  useEffect(() => {
    if (new Date(date) > NOW) return 
    
    if (NOW_HOUR >= hour) {
      dispatch(setBook({
        step: "stepOne",
        type: "hour",
        data: NOW_MINUTES >= 55 ? (NOW_HOUR + 1) : NOW_HOUR
      }))
      
      setCount(prev => {
        return {
          ...prev,
          move: prev.move, selected: NOW_MINUTES >= 55 ? -(NOW_HOUR + 1) : -NOW_HOUR
        }
      });
    }
  }, [date]);
  // BoxTime에서 로드 된다음에 hour가 바뀌는거 감지해야함
  useEffect(()=>{
    setCount(prev => {
      return {
        ...prev,
        move: prev.move, selected: NOW_MINUTES >= 55 ? -(NOW_HOUR + 1) : -NOW_HOUR
      }
    })
  },[])
  
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
          style={{transform: `translateX(${count.move * MOVE_X}px)`}}
        >
          {list.map((item) => (
            <li
              key={item}
              className={`${styled.item_slide} ${item === -count.selected ? styled.on : ""}`}
            >
              <button type="button" onClick={() => handleSlideItemClick(item)} style={{opacity: `${hourDisabledCondition(item) ? 1 : 0.5}`}} disabled={`${hourDisabledCondition(item) ? '' : 'disabled'}`}>
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
