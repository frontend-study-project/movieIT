import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SelectItem from "../CommonItem/SelectItem";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepTwo.module.css";
import { useState } from "react";
import SeatArrange from "../SeatItem/SeatArrange";

const BoxSeat = () => {
  const [count, setCount] = useState({
    adult: 0,
    teenager: 0,
    senior: 0,
    challenged: 0,
  });

  const onAddCount = (id) => {
    console.log(id);
    setCount((prev) => {
      return {
        ...prev,
        [id]: prev[id] + 1,
      };
    });
  };

  const handleResetCount = () => {
    setCount({
      adult: 0,
      teenager: 0,
      senior: 0,
      challenged: 0,
    });
  };

  

  return (
    <div className={styled.wrap_seat}>
      <div className={styled.head_book}>
        <h4>관람인원선택</h4>
        <button type="button" onClick={handleResetCount}>
          <RestartAltIcon fontSize="small">이전</RestartAltIcon>초기화
        </button>
      </div>
      <div className={styled.box_select}>
        <SelectItem
          id="adult"
          label="성인"
          count={count}
          onAddCount={onAddCount}
        />
        <SelectItem
          id="teenager"
          label="청소년"
          count={count}
          onAddCount={onAddCount}
        />
        <SelectItem
          id="senior"
          label="경로"
          count={count}
          onAddCount={onAddCount}
        />
        <SelectItem
          id="challenged"
          label="우대"
          count={count}
          onAddCount={onAddCount}
        />
      </div>
      <div className={`${styled.box_seat} ${styledCommon.scroll}`}>
        <SeatArrange/>
      </div>
    </div>
  );
};
export default BoxSeat;
