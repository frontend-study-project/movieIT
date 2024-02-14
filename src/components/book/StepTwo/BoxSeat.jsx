import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SelectItem from "../BookItem/SelectItem";
import SeatItem from "../BookItem/SeatItem";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepTwo.module.css";
import { useCallback, useEffect, useState } from "react";

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

  const [seatArr, setSeatArr] = useState({
    seatRowArr: [],
    seatColArr: [],
  });

  const TOPBLANK = 75;

  const totalSeatInfo = {
    row: 20,
    col: [6, 10, 6],
    aisle: { x: [6, 10], y: [14] },
  };

  const seatsNum = {
    x: totalSeatInfo.row,
    y: totalSeatInfo.col.reduce((acc, cur) => acc + cur, 0),
  };

  const layout = {
    width: 20 * (seatsNum.x + totalSeatInfo.aisle.x.length + 1), // 좌석수 + 통로수 + 알파벳 정보(열 정보)
    height: 18 * (seatsNum.y + totalSeatInfo.aisle.y.length), // 좌석수 + 통로수
  };

  const startPoint = {
    x: 770 / 2 - layout.width / 2,
    y: 394 / 2 - layout.height / 2 + TOPBLANK,
  };

  const makeSeatArr = useCallback(() => {
    const seatRowArr = [],
      seatColArr = [];
    let rowIdx = 0;
    for (let i = 0; i < totalSeatInfo.row; i++) {
      seatRowArr.push({
        order: String.fromCharCode(65 + i),
        aisle: totalSeatInfo.aisle.y.includes(i) ? rowIdx++ : rowIdx,
      });
    }
    setSeatArr((prev) => {
      return {
        ...prev,
        seatRowArr: seatRowArr,
      };
    });
    let colIdx = 0;
    totalSeatInfo.col.map((ele, idx) => {
      for (let i = 1; i <= ele; i++) {
        const remodelIdx = 10 * idx + i;
        seatColArr.push({
          order: remodelIdx,
          aisle: totalSeatInfo.aisle.x[idx] === i ? colIdx++ : colIdx,
        });
      }
    });
    setSeatArr((prev) => {
      return {
        ...prev,
        seatColArr: seatColArr,
      };
    });
  }, []);

  useEffect(() => {
    makeSeatArr();
  }, []);

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
        <div className={styled.layout_seat}>
          <span className={styled.area_screen}>SCREEN</span>
          <span className={styled.ico_entry}>
            <ExitToAppIcon fontSize="small">입구</ExitToAppIcon>
          </span>
          {seatArr.seatRowArr.map((row, rowIdx) => {
            return seatArr.seatColArr.map((col, colIdx) => {
              const key = `${row.order}-${col.order}`;
              const leftIdx = colIdx + col.aisle;
              const topIdx = rowIdx + row.aisle;
              const left = startPoint.x + leftIdx * 20;
              const top = startPoint.y + topIdx * 20;
              return (
                <>
                  {colIdx === 0 && (
                    <span
                      className={styled.block_row}
                      style={{ left: left - 40, top: top }}
                    >
                      {row.order}
                    </span>
                  )}
                  <button
                    key={key}
                    type="button"
                    className={styled.block_seat}
                    title={`${row.order}${col.order}`}
                    style={{ left: left, top: top }}
                  >
                    <SeatItem
                      seatType={"common"}
                      seatDesc={`${row.order}${col.order}`}
                      seatNum={col.order}
                    />
                  </button>
                </>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
export default BoxSeat;
