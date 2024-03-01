import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import { useEffect, useState } from "react";

const BoxTheater = () => {
  const [theaterList, setTheaterList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/theater')
    .then(res => res.json())
    .then(data => {
      setTheaterList(data)
    })
  }, []);

  const dispatch = useDispatch();

  const selectedArea = useSelector((state) => state.book.stepOne.area);
  const selectedTheater = useSelector((state) => state.book.stepOne.theater);

  const handleClickArea = (event) => {
    const depth1DataAttribute = event.currentTarget.getAttribute("data-depth1");
    const area = theaterList[depth1DataAttribute]["area_depth1"];

    dispatch(
      setBook({
        step: "stepOne",
        type: "area",
        data: area,
      })
    );
  };
  const handleClickTheater = (event) => {
    const depth1DataAttribute = event.currentTarget.getAttribute("data-depth1");
    const depth2DataAttribute = event.currentTarget.getAttribute("data-depth2");
    const theater =
    theaterList[depth1DataAttribute]["area_depth2"][depth2DataAttribute]
        .txt;

    dispatch(
      setBook({
        step: "stepOne",
        type: "theater",
        data: theater,
      })
    );
  };
  return (
    <div className={styled.box_theater}>
      <h3 className={styledCommon.tit_box}>
        극장<span className={styledCommon.screen_out}>선택</span>
      </h3>
      <div className={styled.inner_theater}>
        <ul className={styled.list_area}>
          {theaterList.map((item, idx) => (
            <li
              key={item.id}
              className={
                selectedArea === item.area_depth1 ? `${styled.on}` : ""
              }
            >
              <button type="button" data-depth1={idx} onClick={handleClickArea}>
                {item.area_depth1}
              </button>
              <ul className={`${styled.list_theater} ${styledCommon.scroll}`}>
                {item.area_depth2.map((item2, idx2) => (
                  <li
                    key={item2.id}
                    className={
                      selectedTheater === item2.txt ? `${styled.on}` : ""
                    }
                  >
                    <button
                      data-depth1={idx}
                      data-depth2={idx2}
                      type="button"
                      onClick={handleClickTheater}
                    >
                      {item2.txt}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BoxTheater;
