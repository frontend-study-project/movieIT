import { useDispatch, useSelector } from "react-redux";
import RatingItem from "../CommonItem/RatingItem";
import SeatItem from "../SeatItem/SeatItem";
import styled from "./StepTwo.module.css";
import { setPage } from "../../../store/slice/book";
import { useEffect, useState } from "react";

const BoxSeatInfo = () => {
  const { date, movie, theater, screen, runningTime } = useSelector(
    (state) => state.book.stepOne
  );

  const listSelectedSeats = new Array(8).fill(0);

  const { totalNum, selectedSeats, seatCategory } = useSelector(
    (state) => state.book.stepTwo
  );

  const [posterURL, setPosterURL] = useState("");

  const dispatch = useDispatch();

  const handlePrevClick = () => {
    dispatch(setPage(1));
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/movie/now_playing?page=1")
      .then((res) => res.json())
      .then((data) => {
        const [movieInfo] = data.filter((ele) => ele.title === movie);

        setPosterURL(movieInfo.poster_path);
      });
  }, []);

  return (
    <div className={styled.box_result}>
      <div className={styled.item_movie}>
        <RatingItem rating={1} ratingDesc={"전체관람가"} />
        <span className={styled.txt_tit}>{movie}</span>
        <span className={styled.txt_cate}>2D(자막)</span>
      </div>
      <div className={styled.item_info}>
        <div className={styled.inner_info}>
          {theater} <br />
          {screen}
          <br />
          {date.toLocaleString("ko-KR")} <br />
          <span className={styled.txt_time}>
            {runningTime.timeStart} ~ {runningTime.timeEnd}
          </span>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/${posterURL}`}
          alt=""
          className={styled.thumb_img}
        />
      </div>
      <div className={styled.item_seat}>
        <ul className={styled.info_seat}>
          <li>
            <SeatItem seatType={"selected"} seatDesc={"선택한 좌석"} /> 선택
          </li>
          <li>
            <SeatItem seatType={"occupied"} seatDesc={"예매완료"} /> 예매완료
          </li>
          <li>
            <SeatItem seatType={"impossible"} seatDesc={"선택불가"} /> 선택불가
          </li>
          <li>
            <SeatItem seatType={"common"} seatDesc={"일반"} /> 일반
          </li>
          <li>
            <SeatItem seatType={"challenged"} seatDesc={"장애인석"} /> 장애인석
          </li>
        </ul>
        <div className={styled.info_select}>
          <em>선택좌석</em>
          <ul>
            {
              listSelectedSeats.map((ele, idx) => {
                if (idx < totalNum) {
                  if (idx < selectedSeats.length) {
                    return <li className={styled.seat_selected} title="선택한 좌석">
                      {selectedSeats[idx]}
                    </li>
                  } else {
                    return <li className={styled.seat_empty} title="선택할 수 있는 좌석">
                    -
                  </li>
                  }
                } else {
                  return <li title="구매가능 좌석">-</li>
                }
              })
            }
          </ul>
        </div>
      </div>
      <div className={styled.item_pay}>
        <em className={styled.cate_pay}>
          {seatCategory.adult === 0 ? '' : `성인 ${Math.min(seatCategory.adult , selectedSeats.length)}`}
          {seatCategory.teenager === 0 ? '' : `청소년 ${Math.min(seatCategory.teenager , Math.max(selectedSeats.length - seatCategory.adult, 0))}`}
          {seatCategory.senior === 0 ? '' : `경로 ${Math.min(seatCategory.senior , Math.max(selectedSeats.length - seatCategory.adult - seatCategory.teenager, 0))}`}
          {seatCategory.challenged === 0 ? '' : `우대 ${Math.min(seatCategory.challenged , Math.max(selectedSeats.length - seatCategory.adult - seatCategory.teenager - seatCategory.senior, 0))}`}
        </em>
        <div className={styled.txt_pay}>
          <em>최종결제금액</em>
          <strong className={styled.num_pay}>
            <em>24,000</em>원
          </strong>
        </div>
      </div>
      <div className={styled.item_btns}>
        <button
          type="button"
          className={styled.btn_prev}
          onClick={handlePrevClick}
        >
          이전
        </button>
        <button type="button" className={styled.btn_next}>
          결제
        </button>
      </div>
    </div>
  );
};
export default BoxSeatInfo;
