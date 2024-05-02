import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SeatItem from "./SeatItem";

import styled from "./seatItem.module.css";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import { setAlert } from "../../../store/slice/alert";

const SeatArrange = ({occupiedSeatsList, challengedSeats}) => {
  const [seatArr, setSeatArr] = useState({
    seatRowArr: [],
    seatColArr: [],
  });

  const TOPBLANK = 75;

  const totalSeatInfo = {
    row: 20,
    col: [6, 10, 6],
    aisle: { x: [14], y: [6, 10] },
  };

  const seatsNum = {
    x: totalSeatInfo.row,
    y: totalSeatInfo.col.reduce((acc, cur) => acc + cur, 0),
  };

  const layout = {
    width: 20 * (seatsNum.x + totalSeatInfo.aisle.y.length + 1), // 좌석수 + 통로수 + 알파벳 정보(열 정보)
    height: 18 * (seatsNum.y + totalSeatInfo.aisle.x.length), // 좌석수 + 통로수
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
        aisle: totalSeatInfo.aisle.x.includes(i) ? rowIdx++ : rowIdx,
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
          aisle: totalSeatInfo.aisle.y[idx] === i ? colIdx++ : colIdx,
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
  console.log(seatArr);

  useEffect(() => {
    makeSeatArr();
  }, []);

  const dispatch = useDispatch();
  const {selectedSeats, totalNum} = useSelector((state) => state.book.stepTwo);

  const handleClickSeat = (event) => {
    const seatNum = event.currentTarget.getAttribute("title");

    if (selectedSeats.includes(seatNum)) {
      const deletedSeatList = [...selectedSeats].filter(ele => ele !== seatNum);
      dispatch(setBook({
        step: "stepTwo",
        type: "selectedSeats",
        data: deletedSeatList,
      }));
    } else {
      if (selectedSeats.length < totalNum) {
        dispatch(setBook({
          step: "stepTwo",
          type: "selectedSeats",
          data: [...selectedSeats, seatNum],
        }));
      } else if (totalNum === 0) {
        dispatch(setAlert({
          open: true,
          title: '관람하실 인원을 먼저 선택해주세요.',
          btnList: [{autoFocus: true, txt: '확인', clickFn: () => {}}]
        }))
      } else {
        dispatch(setAlert({
          open: true,
          title: "좌석 선택이 완료되었습니다.",
          btnList: [{autoFocus: true, txt: '확인', clickFn: () => {}}]
        }))
      }
    }
    
  };

  const handleSeatClassName = (key) => {
    if (selectedSeats.includes(key)) {
      return "selected";
    } else if (occupiedSeatsList?.includes(key)) {
      return "occupied";
    } else if (challengedSeats.includes(key)) {
      return "challenged";
    } else {
      return "common"
    }
  }
  
  useEffect(() => {
    return () => {
      dispatch({ step: "stepTwo", type: "selectedSeats", data: [] });
    };
  }, []);

  return (
    <div className={styled.layout_seat}>
        <span className={styled.area_screen}>SCREEN</span>
        <span className={styled.ico_entry}>
          <ExitToAppIcon fontSize="small">입구</ExitToAppIcon>
        </span>
        {seatArr.seatRowArr.map((row, rowIdx) => {
          return seatArr.seatColArr.map((col, colIdx) => {
            const key = `${row.order}${col.order}`;
            const leftIdx = colIdx + col.aisle;
            const topIdx = rowIdx + row.aisle;
            const left = startPoint.x + leftIdx * 20;
            const top = startPoint.y + topIdx * 20;
            return (
              <div key={key}>
                {colIdx === 0 && (
                  <span
                    className={styled.block_row}
                    style={{ left: left - 40, top: top }}
                  >
                    {row.order}
                  </span>
                )}
                <button
                  type="button"
                  className={styled.block_seat}
                  title={`${row.order}${col.order}`}
                  style={{ left: left, top: top }}
                  onClick={handleClickSeat}
                >
                  <SeatItem
                    seatType={handleSeatClassName(key)}
                    seatDesc={`${row.order}${col.order}`}
                    seatNum={col.order}
                  />
                </button>
              </div>
            );
          });
        })}
      </div>
  );
};
export default SeatArrange;
