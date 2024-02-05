import { useState, useEffect } from "react";
// import {Provider, useSelector, useDispatch} from "react-redux";

import SlideList from "../components/SlideList";

import styledCommon from "../book.module.css";
import styled from "./StepOne.module.css";

const BoxDate = () => {
  // const dispatch = useDispatch();

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
  }, []);

  return (
    <div className={styled.box_date}>
      <h3 className={styledCommon.screen_out}>날짜 선택</h3>
      <SlideList
        list={dates}
        year={year}
        yearHandler={yearHandler}
        moveX={70}
      />
    </div>
  );
};
export default BoxDate;
