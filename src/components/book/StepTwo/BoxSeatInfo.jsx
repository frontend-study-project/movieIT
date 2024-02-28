import { useDispatch, useSelector } from "react-redux";
import RatingItem from "../CommonItem/RatingItem";
import SeatItem from "../SeatItem/SeatItem";
import styled from "./StepTwo.module.css";
import { setPage } from "../../../store/slice/book";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../../store/slice/alert";

const BoxSeatInfo = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { date, movie, theater, screen, runningTime } = useSelector(
    (state) => state.book.stepOne
  );

  const selectedDate = new Date(date);

  const dayList = ['일','월','화','수','목','금','토'];

  const layoutDate = `${selectedDate.getFullYear()}.${selectedDate.getMonth() + 1}.${selectedDate.getDate()} (${dayList[selectedDate.getDay()]})`

  const { totalNum, selectedSeats, seatCategory } = useSelector(
    (state) => state.book.stepTwo
  );

  const listSelectedSeats = new Array(8).fill(0);

  const ageCate = {
    adult: {
      num: Math.min(seatCategory.adult , selectedSeats.length),
      price: 15000
    },
    teenager: {
      num: Math.min(seatCategory.teenager , Math.max(selectedSeats.length - seatCategory.adult, 0)),
      price: 12000
    },
    senior: {
      num: Math.min(seatCategory.senior , Math.max(selectedSeats.length - seatCategory.adult - seatCategory.teenager, 0)),
      price: 5000
    },
    challenged: {
      num: Math.min(seatCategory.challenged , Math.max(selectedSeats.length - seatCategory.adult - seatCategory.teenager - seatCategory.senior, 0)),
      price: 5000
    },
  }

  const totalPrice = Object.values(ageCate).reduce((acc, cur) => {
    acc += cur.num * cur.price;
    return acc
  }, 0);

  const [posterURL, setPosterURL] = useState("");

  const handlePrevClick = () => {
    dispatch(setPage(1));
  };

  const handleCompleteBook = () => {
    dispatch(setAlert({
      open: true,
      title: '예매가 완료되었습니다!',
      btnList: [{autoFocus: true, txt: '확인'}]
    }))

    navigate('/mypage/booking')
  }

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
          {layoutDate} <br />
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
                    return <li key={`좌석선택${idx}`} className={styled.seat_selected} title="선택한 좌석">
                      {selectedSeats[idx]}
                    </li>
                  } else {
                    return <li key={`좌석선택${idx}`} className={styled.seat_empty} title="선택할 수 있는 좌석">
                    -
                  </li>
                  }
                } else {
                  return <li key={`좌석선택${idx}`} title="구매가능 좌석">-</li>
                }
              })
            }
          </ul>
        </div>
      </div>
      <div className={styled.item_pay}>
        <em className={styled.cate_pay}>
          {seatCategory.adult === 0 ? '' : `성인 ${ageCate.adult.num}`}
          {seatCategory.teenager === 0 ? '' : `청소년 ${ageCate.teenager.num}`}
          {seatCategory.senior === 0 ? '' : `경로 ${ageCate.senior.num}`}
          {seatCategory.challenged === 0 ? '' : `우대 ${ageCate.challenged.num}`}
        </em>
        <div className={styled.txt_pay}>
          <em>최종결제금액</em>
          <strong className={styled.num_pay}>
            <em>{totalPrice}</em>원
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
        <button type="button" className={styled.btn_next} onClick={handleCompleteBook}>
          예매
        </button>
      </div>
    </div>
  );
};
export default BoxSeatInfo;
