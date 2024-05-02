import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import { useEffect, useState } from "react";
import { useFetchTheaterListQuery } from "../../../hooks/useTheater";

const BoxTheater = () => {
  const [theaterList, setTheaterList] = useState([]);
  const { data } = useFetchTheaterListQuery();
  useEffect(() => {
    setTheaterList(data);
  }, [data]);

  const dispatch = useDispatch();

  const selectedArea = useSelector((state) => state.book.stepOne.area);
  const {id: selectedTheaterId} = useSelector((state) => state.book.stepOne.theater);

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

    dispatch(
      setBook({
        step: "stepOne",
        type: "theater",
        data: {id: '', txt: ''},
      })
    );
  };
  const handleClickTheater = (id, txt) => {

    dispatch(
      setBook({
        step: "stepOne",
        type: "theater",
        data: {id, txt},
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
          {theaterList?.map((item, idx) => (
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
                {item.area_depth2.map((item2) => (
                  <li
                    key={item2.id}
                    className={
                      parseInt(selectedTheaterId) === parseInt(item2.id) ? `${styled.on}` : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => handleClickTheater(item2.id, item2.txt)}
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
