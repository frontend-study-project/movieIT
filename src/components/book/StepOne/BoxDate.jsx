import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SlideDate from "../SlideItem/SlideDate";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { setBook } from "../../../store/slice/book";

const BoxDate = () => {
  const dispatch = useDispatch();

  const handleDateClick = (date) => {
    dispatch(
      setBook({
        step: 'stepOne',
        type: "date",
        data: date.toISOString(),
      })
    );
  };

  const [dates, setDates] = useState([]);

  const [year, setYear] = useState(
    `${new Date().getFullYear()}.${new Date().getMonth() + 1}`
  );

  const yearHandler = (date) => {
    setYear(`${date.getFullYear()}.${date.getMonth() + 1}`);
  };

  useEffect(() => {
    const DAY = 1000 * 60 * 60 * 24;
    const now = new Date().getTime();
    const defaultDates = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(now + i * DAY);
      const day = date.getDay();
      const DayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][day];
      defaultDates.push({
        id: date,
        num: date.getDate(),
        txt: DayOfWeek,
      });
    }
    setDates(defaultDates);
    dispatch(
      setBook({
        step: 'stepOne',
        type: "date",
        data: new Date().toISOString(),
      })
    );
  }, []);

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
