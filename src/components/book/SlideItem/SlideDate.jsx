import styled from "./slide.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchMovieDetailQuery } from "../../../hooks/useMovie";
import { setAlert } from "../../../store/slice/alert";
import { reset } from "../../../store/slice/book";

const SlideDate = ({ list, year, moveX, onSlideItemClick }) => {
  const dispatch = useDispatch();
  const {movie} = useSelector((state) => state.book.stepOne);
  const {data: movieList} = useFetchMovieDetailQuery();
  const [count, setCount] = useState({move: 0, selected: 0});

  const handleDisabledPrev = () => {
    return count.move >= 0 ? 'disabled' : '';
  }

  const handleDisabledNext = () => {
    return count.move <= -16 ? 'disabled' : '';
  }

  const handleSelected = () => {
    return -count.selected;
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
    moveToDirect(0);
  }

  const handleSlideItemClick = (event) => {
    const idx = event.currentTarget.getAttribute('data-date');

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

    moveToDirect(idx);

    onSlideItemClick(list[idx].id);


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
      {year && <strong className={styled.txt_year}>{year}</strong>} {/* year이 아닌 list[count].id를 넣고 싶음 */}
      <div className={styled.inner_slide}>
        <ul
          className={styled.list_slide}
          style={{transform: `translateX(${count.move * moveX}px)`}}
        >
          {list.map((item, idx) => (
            <li
              key={item.id}
              className={`${styled.item_slide} ${idx === handleSelected() ? styled.on : ""}`}
            >
              <button type="button" data-date={idx} onClick={handleSlideItemClick}>
                <em className={styled.txt_num}>{item.num}</em>
                <span className={styled.tit_txt}>{item.txt}</span>
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
export default SlideDate;
