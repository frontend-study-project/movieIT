import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import SlideTime from "../SlideItem/SlideTime";
import TheatersIcon from "@mui/icons-material/Theaters";

import { useDispatch, useSelector } from "react-redux";
import { setBook, setPage } from "../../../store/slice/book";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchSeatsLeftQuery } from "../../../hooks/useSeatsLeft";
import { useFetchUserQuery } from "../../../hooks/useAuth";

const BoxTime = () => {
  const NOW = new Date();
  const NOW_HOUR = NOW.getHours();
  const NOW_MINUTES = NOW.getMinutes();
  const MINUTES = ['10','15','20','25','30','35','40','45','50','55'];
  const [hour, setHour] = useState(NOW_HOUR);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { date, movie, theater, hour : checkHour } = useSelector((state) => state.book.stepOne);
  const {data: user} = useFetchUserQuery();
  
  const { data: seatsLeftdata } = useFetchSeatsLeftQuery({
    movieId: movie.id,
    theaterId: theater.id,
    date,
    hour,
    activate: !!(movie.id && theater.id),
  });

  const [screenList, setScreenList] = useState([]);
  const [seatLeftList, setSeatLeftList] = useState(seatsLeftdata || [0,0,0,0,0,0,0,0,0,0]);

  // 1) slideTime에 보내주는 시간 2) 러닝타임 시간대로 사용
  const hourCondition = () => {
    return hour === 0 ? 24 : hour;
  };

  // SlideTime에서 슬라이드 내 시간 선택할때 BoxTime에서도 알수있게 동기화
  const onChangeHour = (hour) => {
    setHour(hour);
  };
  // 영화시간 클릭시 - 1) 러닝타임 데이터 스토어에 저장 2) 로그인 여부에 따른 페이지 이동
  const handleHourClick = (timeStart, timeEnd) => {

    dispatch(
      setBook({
        step: "stepOne",
        type: "runningTime",
        data: {
          timeStart,
          timeEnd,
        },
      })
    );

    dispatch(setPage(2));
    if (!user) {
      navigate("/login", { state: pathname });
    }
  };
  // 영화, 극장 선택시 (잔여좌석수 받아오고)
  // 날짜, 시간기준으로 상영시간별 리스트 만들기
  useEffect(() => {
    seatsLeftdata && setSeatLeftList(seatsLeftdata);

    let minutesList = MINUTES,
      sliceStartIdx = 0,
      formatDate = new Date(`${date} ${NOW_MINUTES >= 55 ? hour + 1 :hour}:00:00`);

    if (NOW > formatDate && NOW_MINUTES >= 10) {
      sliceStartIdx = Math.round(NOW_MINUTES / 10) + Math.floor(NOW_MINUTES / 10) - 1;

      minutesList = (minutesList.length > 10 - sliceStartIdx) && minutesList.slice(sliceStartIdx);

    } else {
      minutesList = MINUTES
    }

    seatsLeftdata && setSeatLeftList(seatsLeftdata.slice(sliceStartIdx));
    setScreenList(minutesList);

  }, [seatsLeftdata]);

  // slideTime에서 바뀐 시간 받아오기
  useEffect(()=> {
    if (checkHour === '') return;
    if (new Date(date).toDateString() === NOW.toDateString()) {
      setHour(checkHour);
    } 
  }, [date, checkHour]);

  useEffect(() => {
    if (NOW_MINUTES >= 55) {
      setHour(hour + 1)
    }
  }, [])

  return (
    <div className={styled.box_time}>
      <h3 className={styledCommon.tit_box}>
        시간<span className={styledCommon.screen_out}>선택</span>
      </h3>
      <SlideTime hour={hourCondition()} date={date} onChangeHour={onChangeHour} />
      {!(movie.txt && theater.txt) ? (
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
          { screenList.map((ele, idx) => {
            return (
              <li key={"hour" + idx}>
                <button
                  type="button"
                  onClick={() => handleHourClick(`${hourCondition()}:${ele}`, `${hourCondition() + 2}:${ele}`)}
                >
                  <div className={styled.item_time}>
                    <span className={styled.emph_time}>
                      {hourCondition()} : {ele}
                    </span>
                    <div className={styled.txt_time}>
                      ~ {hourCondition() + 2} : {ele}
                    </div>
                  </div>
                  <div className={styled.item_tit}>
                    <strong className={styled.txt_tit}>{movie.txt}</strong>
                    <span className={styled.txt_desc}>2D (자막)</span>
                  </div>
                  <div className={styled.item_info}>
                    <span className={styled.txt_theater}>
                      {theater.txt}
                      <br /> {`컴포트${idx + 1}관`}
                    </span>
                    <span className={styled.wrap_seat}>
                      <span className={styled.num_left}>
                      {seatLeftList ? 440 - seatLeftList[idx]: 440}
                      </span>
                      /<span className={styled.num_total}>440</span>
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
