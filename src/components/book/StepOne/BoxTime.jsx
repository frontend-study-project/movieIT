import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import SlideTime from "../SlideItem/SlideTime";

import TheatersIcon from "@mui/icons-material/Theaters";
import { useFetchUserQuery } from "../../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import { setPage } from "../../../store/slice/book";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoxTime = () => {
  const navigate = useNavigate();

  const {data} = useFetchUserQuery();
  
  const dispatch = useDispatch();

  const hourList = [];
  for (let i = 1; i <= 24; i++) {
    hourList.push({
      id: i,
      num: i,
    });
  }

  const screenList = [
    {
      minute: 10,
      screen: "컴포트3관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 15,
      screen: "컴포트7관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 20,
      screen: "컴포트4관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 25,
      screen: "컴포트9관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 30,
      screen: "컴포트2관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 35,
      screen: "컴포트11관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 40,
      screen: "컴포트5관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 45,
      screen: "컴포트6관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 50,
      screen: "컴포트10관",
      seatLeft: 253,
      seatTotal: 348,
    },
    {
      minute: 55,
      screen: "컴포트8관",
      seatLeft: 253,
      seatTotal: 348,
    },
  ];
  
  const [nowHour, setNowHour] = useState(new Date().getHours());

  const { movie, theater } = useSelector((state) => state.book.stepOne);

  const onChangeHour = (hour) => {
    setNowHour(hour)
  }

  const handleHourClick = (event) => {
    const screen = event.currentTarget.getAttribute("data-screen");
    const timeStart = event.currentTarget.getAttribute("data-timestart");
    const timeEnd = event.currentTarget.getAttribute("data-timeend");

    dispatch(
      setBook({
        step: 'stepOne',
        type: "runningTime",
        data: {
          timeStart,
          timeEnd,
        },
      })
    );

    dispatch(
      setBook({
        step: 'stepOne',
        type: "screen",
        data: screen,
      })
    );
    
    data ? dispatch(setPage(2)) : navigate('/login');
    ;
  };
  return (
    <div className={styled.box_time}>
      <h3 className={styledCommon.tit_box}>
        시간<span className={styledCommon.screen_out}>선택</span>
      </h3>
      {hourList && <SlideTime list={hourList} moveX={35} nowHour={nowHour} onChangeHour={onChangeHour}/>}
      {movie === "" || theater === "" ? (
        <div className={styled.area_empty}>
          <TheatersIcon fontSize="large" color="disabled" />
          <p>
            영화와 극장을 선택하시면
            <br />
            상영시간표를 비교하여 볼 수 있습니다.
          </p>
        </div>
      ) : (
        <ul className={`${styled.list_movies} ${styledCommon.scroll}`}>
          {screenList.map((ele, idx) => {
            return (
              <li key={"hour" + idx}>
                <button
                  type="button"
                  data-screen={ele.screen}
                  data-timestart={`${+nowHour + 1} : ${ele.minute}`}
                  data-timeend={`${+nowHour + 2} : ${ele.minute}`}
                  onClick={handleHourClick}
                >
                  <div className={styled.item_time}>
                    <span className={styled.emph_time}>{+nowHour + 1} : {ele.minute}</span>
                    <div className={styled.txt_time}>~ {+nowHour + 2} : {ele.minute}</div>
                  </div>
                  <div className={styled.item_tit}>
                    <strong className={styled.txt_tit}>{movie}</strong>
                    <span className={styled.txt_desc}>2D (자막)</span>
                  </div>
                  <div className={styled.item_info}>
                    <span className={styled.txt_theater}>
                      {theater}
                      <br /> {ele.screen}
                    </span>
                    <span className={styled.wrap_seat}>
                      <span className={styled.num_left}>{ele.seatLeft}</span>/
                      <span className={styled.num_total}>{ele.seatTotal}</span>
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default BoxTime;
