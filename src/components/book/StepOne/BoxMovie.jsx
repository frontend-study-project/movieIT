import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import RatingItem from "../CommonItem/RatingItem";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import SkeletonBox from "../../common/Skeleton/Skeleton";
import { useFetchMovieDetailQuery } from "../../../hooks/useMovie";

const BoxMovie = () => {
  const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const {date, movie} = useSelector((state) => state.book.stepOne);
  const ratingList = {
    'All': '전체 관람가',
    '12': '12세 이상 관람가',
    '15': '15세 이상 관람가',
    '18': '청소년 관람불가',
  }

  const {isLoading, data} = useFetchMovieDetailQuery();

  useEffect(() => {
    let list = isLoading ? [] : data?.filter(ele => new Date(ele.release_date) <= new Date(date));
    // let test = isLoading ? [] : data?.map(ele => console.log(date));
    list = [...list].map((ele) => {
      return {
        id: ele.id,
        rating: ele.certification,
        ratingDesc: ratingList[ele.certification],
        name: ele.title,
      };
    });

    setMovieList(list);
    setSelectedMovieId(movie.id);
  }, [date, data]);

  const handleClickMovie = (movie) => {
    setSelectedMovieId(movie.id);

    dispatch(setBook({ step: "stepOne", type: "movie", data: {id: movie.id, txt: movie.name} }));
    dispatch(setBook({ step: "stepOne", type: "rating", data: movie.rating }))
  };

  return (
    <div className={styled.box_movie}>
      <h3 className={styledCommon.tit_box}>
        영화<span className={styledCommon.screen_out}>선택</span>
      </h3>
      {isLoading ? (
        Array.from({length: 16}).map((_, idx) => <SkeletonBox key={`skeleton${idx}`} width={228} height={24} color={400} style={{ marginBottom: '4px' }}/>)
      ) : (
        <ul className={`${styled.list_movie} ${styledCommon.scroll}`}>
        {movieList.map((item) => (
          <li
            key={item.id}
            className={selectedMovieId && (selectedMovieId === item.id) ? styled.on : ""}
          >
            <button type="button" id={item.id} onClick={() => handleClickMovie(item)}>
              <RatingItem rating={item.rating} ratingDesc={item.ratingDesc} />
              <span className={styled.txt_movie}>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};
export default BoxMovie;
