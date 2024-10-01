import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import RatingItem from "../CommonItem/RatingItem";

import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import SkeletonBox from "../../common/Skeleton/Skeleton";
import { useFetchMovieDetailQuery } from "../../../hooks/useMovie";
import { useNavigate, useSearchParams } from "react-router-dom";

const BoxMovie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');
  const areaId = searchParams.get('area');
  const theaterId = searchParams.get('theater');
  const first = useRef(false);

  const [movieList, setMovieList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const dispatch = useDispatch();
  const {date, movie} = useSelector((state) => state.book.stepOne);
  const ratingList = {
    'ALL': '전체 관람가',
    '12': '12세 이상 관람가',
    '15': '15세 이상 관람가',
    '18': '청소년 관람불가',
  }

  const {isLoading, data} = useFetchMovieDetailQuery();

  useEffect(() => {
    let list = isLoading ? [] : data.filter(ele => new Date(ele.release_date) <= new Date(date));
    list = [...list].map((ele) => {
      return {
        id: ele.id,
        rating: ele.certification,
        ratingDesc: ratingList[ele.certification],
        name: ele.title,
      };
    });

    setMovieList(list);
    setSelectedMovieId(movie.id); // [필요사항] 좌석선택 페이지로 넘어갔다가 이전버튼으로 돌아올 경우 선택된 영화가 선택된 상태로 보여지기 위해 필요함 
  }, [date, data]);

  useEffect(() => {
    if (!movieList.length || !movieId || first.current) return;

    const defaultMovie = movieList.find((item) => item.id === parseInt(movieId));

    if (!defaultMovie && !areaId && !theaterId) return;

    handleClickMovie(defaultMovie);

    if (theaterId) navigate(`/book?movie=${movieId}&area=${areaId}&theater=${theaterId}`, {
      replace: true
    })
    else if (areaId) navigate(`/book?movie=${movieId}&area=${areaId}`, {
      replace: true
    })

    first.current = true;
  },[movieList, first])


  const handleClickMovie = (movie) => {
    setSelectedMovieId(movie.id);

    dispatch(setBook({ step: "stepOne", type: "movie", data: {id: movie.id, txt: movie.name} }));
    dispatch(setBook({ step: "stepOne", type: "rating", data: movie.rating }))

    navigate(`/book?movie=${movie.id}`, {
      replace: true,
    });
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
