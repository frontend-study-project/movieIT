import styledCommon from "../book.module.css";
import styled from "./StepOne.module.css";
import SlideList from "../components/SlideList";

import TheatersIcon from '@mui/icons-material/Theaters';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBook } from "../../../store/slice/book";

const BoxTime = () => {
  const dispatch = useDispatch();

  const dummyHourList = [
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
    {
      timeStart: '09:50',
      timeEnd: '11:56',
      title: '웡카',
      titleDesc: '2D (자막)',
      theater: '코엑스',
      screen: '컴포트3관',
      seatLeft: 253,
      seatTotal: 348
    },
  ]

  const hourList = [];
  for (let i = 1; i <= 24; i++) {
    hourList.push({
      id: i,
      num: i,
    });
  }

  const bookInfo = useSelector(state => state.book);

  const {movie, theater} = bookInfo;

  const handleHourClick = (event) => {
    const timeStart = event.currentTarget.getAttribute('data-timestart');
    const timeEnd = event.currentTarget.getAttribute('data-timeend');

    dispatch(setBook({
      type: 'hour',
      data: {
        timeStart, 
        timeEnd
      }
    }))

    
  }

  return (
    <div className={styled.box_time}>
      <h3 className={styledCommon.tit_box}>
        시간<span className={styledCommon.screen_out}>선택</span>
      </h3>
      {hourList && <SlideList list={hourList} moveX={35} />}
      {
        (movie === '' || theater === '') ?
        <div className={styled.area_empty}>
          <TheatersIcon fontSize="large" color="disabled" />
          <p>영화와 극장을 선택하시면<br />상영시간표를 비교하여 볼 수 있습니다.</p>
        </div> :
        <ul className={`${styled.list_movies} ${styledCommon.scroll}`}>
        {dummyHourList.map((ele, idx) => {
          return <li key={'hour' + idx}>
          <button type="button" data-timestart={ele.timeStart} data-timeend={ele.timeEnd} onClick={handleHourClick}>
            <div className={styled.item_time}>
              <span className={styled.emph_time}>{ele.timeStart}</span>
              <div className={styled.txt_time}>~{ele.timeEnd}</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>{ele.title}</strong>
              <span className={styled.txt_desc}>{ele.titleDesc}</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
              {ele.theater}
                <br /> {ele.screen}
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>{ele.seatLeft}</span>/
                <span className={styled.num_total}>{ele.seatTotal}</span>
              </span>
            </div>
          </button>
        </li>
        })}
      </ul>
      }
      
    </div>
  );
};
export default BoxTime;
