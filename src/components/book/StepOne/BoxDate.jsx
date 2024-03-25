import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SlideDate from "../SlideItem/SlideDate";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { setBook } from "../../../store/slice/book";

const BoxDate = () => {
  const dispatch = useDispatch();

  const handleDateClick = (date) => {
    const yearNum = new Date(date).getFullYear();
    const monthNum = new Date(date).getMonth() + 1;
    const dateNum = new Date(date).getDate();

    const formatMonth = yearNum < 10 ? `0${yearNum}` : yearNum;
    const formatDate = dateNum < 10 ? `0${dateNum}` : dateNum;

    dispatch(
      setBook({
        step: 'stepOne',
        type: "date",
        data: `${yearNum}-${formatMonth}-${formatDate}`,
      })
    );
  };

  const [dates, setDates] = useState([]);

  const [year, setYear] = useState(new Date().getFullYear());

  const yearHandler = (date) => {
    setYear(new Date(date).getFullYear());
  };

  useEffect(() => {
    const DAY = 1000 * 60 * 60 * 24;
    const now = new Date().getTime();
    const defaultDates = [];
    let month = new Date().getMonth() + 1, formatMonth = month < 10 ? `0${month}` : month;
    let date = new Date().getDate(), formatDate = date < 10 ? `0${date}` : date;

    for (let i = 0; i < 30; i++) {
      const date = new Date(now + i * DAY);
      const DayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      defaultDates.push({
        id: date,
        num: date.getDate(),
        txt: DayOfWeek[date.getDay()],
      });
    }
    setDates(defaultDates);
    dispatch(
      setBook({
        step: 'stepOne',
        type: "date",
        data: `${year}-${formatMonth}-${formatDate}`
      })
    );
  }, [dispatch]);

  return (
    <div className={styled.box_date}>
      <h3 className={styledCommon.screen_out}>날짜 선택</h3>
      <SlideDate
        list={dates}
        year={year}
        yearHandler={yearHandler}
        moveX={70}
        onSlideItemClick={handleDateClick}
      />
    </div>
  );
};
export default BoxDate;
