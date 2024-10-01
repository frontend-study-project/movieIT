import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { useDispatch } from "react-redux";
import { setBook } from "../../../store/slice/book";
import { useEffect, useRef, useState } from "react";
import { useFetchTheaterListQuery } from "../../../hooks/useTheater";
import { useNavigate, useSearchParams } from "react-router-dom";

const BoxTheater = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');
  const areaId = searchParams.get('area');
  const theaterId = searchParams.get('theater');
  const first = useRef(false);

  const [theaterList, setTheaterList] = useState([]);
  const { isLoading, data } = useFetchTheaterListQuery();

  useEffect(() => {
    setTheaterList(data);
  }, [data]);

  const dispatch = useDispatch();

  useEffect(()=> {
    if (isLoading || !areaId || first.current) return;
    
    const defaultArea = theaterList.find((item) => item.id === parseInt(areaId));
    const defaultTheater = defaultArea.area_depth2.find((item) => item.id === parseInt(theaterId));
    
    if (!defaultArea || !defaultTheater) return;
    
    handleClickTheater(defaultArea.id, defaultTheater.id, defaultTheater.txt)

    first.current = true;
  }, [theaterList, first]);

  const handleClickArea = (id) => {
    navigate(`/book?movie=${movieId}&area=${id}`, {
      replace: true
    })
  };
  const handleClickTheater = (areaId, theaterId, theaterTxt) => {

    dispatch(
      setBook({
        step: "stepOne",
        type: "theater",
        data: {id: theaterId, txt: theaterTxt},
      })
    );

    navigate(`/book?movie=${movieId}&area=${areaId}&theater=${theaterId}`, {
      replace: true
    })
  };
  return (
    <div className={styled.box_theater}>
      <h3 className={styledCommon.tit_box}>
        극장<span className={styledCommon.screen_out}>선택</span>
      </h3>
      <div className={styled.inner_theater}>
        <ul className={styled.list_area}>
          {theaterList?.map(item => (
            <li
              key={item.id}
              className={
                parseInt(areaId) === item.id ? `${styled.on}` : ""
              }
            >
              <button type="button" onClick={() => handleClickArea(item.id)}>
                {item.area_depth1}
              </button>
              <ul className={`${styled.list_theater} ${styledCommon.scroll}`}>
                {item.area_depth2.map(item2 => (
                  <li
                    key={item2.id}
                    className={
                      parseInt(theaterId) === parseInt(item2.id) ? `${styled.on}` : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => handleClickTheater(item.id, item2.id, item2.txt)}
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
