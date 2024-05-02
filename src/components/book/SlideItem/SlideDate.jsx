import styled from "./slide.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchMovieDetailQuery } from "../../../hooks/useMovie";
import { setAlert } from "../../../store/slice/alert";
import { reset, setBook } from "../../../store/slice/book";

const SlideDate = ({ list, year }) => {
  const dispatch = useDispatch();
  const {data: movieList} = useFetchMovieDetailQuery();
  const {movie} = useSelector((state) => state.book.stepOne);

  const MOVEX = 70;
  const [count, setCount] = useState({move: 0, selected: 0});

  const handleDisabledPrev = () => {
    return count.move >= 0 ? 'disabled' : '';
  }

  const handleDisabledNext = () => {
    return count.move <= -16 ? 'disabled' : '';
  }

  const selectDate = (idx) => {
    setCount(prev => {
      return {
        ...prev,
        move: prev.move, selected: -idx
      }
    });

    dispatch(
      setBook({
        step: 'stepOne',
        type: "date",
        data: list[idx].id,
      })
    );
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
    if (count.move <= -16) return;

    setCount(prev => {
      return {
        ...prev,
        selected: prev.selected, move: prev.move - 1
      }
    });
  };

  const resetBookInfo = () => {
    dispatch(reset());
    selectDate(0);
  }

  const handleSlideItemClick = (idx) => {
    const [selectedMovie] = movieList.filter(ele => ele.title === movie.txt);
    
    if (selectedMovie) {
      if (new Date(list[idx].id) < new Date(selectedMovie.release_date)) {
        dispatch(setAlert({
          open: true,
          title: '선택 초기화',
          content: '해당 날짜는 선택하신 영화가 존재하지 않습니다. 확인 버튼을 누르시면 선택이 초기화가 됩니다. 초기화하시겠습니까?',
          btnList: [{autoFocus: false, txt: '취소', clickFn: () => {return}}, {autoFocus: true, txt: '확인', clickFn: () => {resetBookInfo()}}],
        }))
        return;
      }
    }

    selectDate(idx);
  }

  return (
    <div className={styled.wrap_slide}>
      <button
        type="button"
        color="disabled"
        className={styled.btn_prev}
        onClick={moveToPrev}
        disabled={handleDisabledPrev()}
      >
        <ArrowBackIosIcon fontSize="small" sx={{ fontSize: 16 }} color={handleDisabledPrev()}>
          이전
        </ArrowBackIosIcon>
      </button>
      <strong className={styled.txt_year}>{year}</strong>
      <div className={styled.inner_slide}>
        <ul
          className={styled.list_slide}
          style={{transform: `translateX(${count.move * MOVEX}px)`}}
        >
          {list.map((item, idx) => (
            <li
              key={item.id}
              className={`${styled.item_slide} ${idx === -count.selected ? styled.on : ""}`}
            >
              <button type="button" onClick={() => handleSlideItemClick(idx)}>
                <em className={styled.txt_num}>{item.num}</em>
                <span className={styled.tit_txt}>{item.txt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button 
      type="button" 
      className={styled.btn_next} 
      onClick={moveToNext}
      disabled={handleDisabledNext()}
      >
        <ArrowForwardIosIcon fontSize="small" sx={{ fontSize: 14 }} color={handleDisabledNext()}>
          다음
        </ArrowForwardIosIcon>
      </button>
    </div>
  );
};
export default SlideDate;
