import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../../../store/slice/book";
import RatingItem from "../CommonItem/RatingItem";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";
import { useQuery } from "@tanstack/react-query";
import SkeletonBox from "../../common/Skeleton/Skeleton";

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

  const {isLoading, error, data} = useQuery({
    queryKey: ['movieList'],
    async queryFn() {
      const response = await fetch("http://localhost:3000/api/movie/now_playing?page=1");
    
      return response.json();
    },
  })

  useEffect(() => {
    let list = isLoading ? [] : data?.filter(ele => new Date(ele.release_date) <= new Date(date));
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
      {isLoading ? (<SkeletonBox width={230} height={450} color={400}/>) : (
        <ul className={`${styled.list_movie} ${styledCommon.scroll}`}>
        {movieList.map((item) => (
          <li
            key={item.id}
            className={selectedMovieId && (selectedMovieId === item.id) ? styled.on : ""}
          >
            <button type="button" id={item.id} onClick={() => handleClickMovie(item)}>
              <RatingItem rating={item.rating} ratingDesc={item.ratingDesc} />
              <span className={styled.txt_movie}>{item.name}</span>
              <span className={styled.like_movie}>
                <FavoriteBorderIcon fontSize="small" sx={{ fontSize: 14 }}>
                  선호하는 영화
                </FavoriteBorderIcon>
              </span>
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};
export default BoxMovie;
