import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBook } from "../../../store/slice/book";
import RatingItem from "../BookItem/RatingItem";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styledCommon from "../../../pages/Book/book.module.css";
import styled from "./StepOne.module.css";

const BoxMovie = () => {
  const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const dummyMovieList = [
    {
      id: 1,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "외계+인",
    },
    {
      id: 2,
      rating: 1,
      ratingDesc: "전체 관람가",
      name: "위시",
    },
    {
      id: 3,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "서울의봄",
    },
    {
      id: 4,
      rating: 4,
      ratingDesc: "청소년 관람불가",
      name: "엔드 오브 에바게리온",
    },
    {
      id: 5,
      rating: 3,
      ratingDesc: "15세 관람가",
      name: "시민덕희",
    },
    {
      id: 6,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "외계+인",
    },
    {
      id: 7,
      rating: 1,
      ratingDesc: "전체 관람가",
      name: "위시",
    },
    {
      id: 8,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "서울의봄",
    },
    {
      id: 9,
      rating: 4,
      ratingDesc: "청소년 관람불가",
      name: "엔드 오브 에바게리온",
    },
    {
      id: 10,
      rating: 3,
      ratingDesc: "15세 관람가",
      name: "시민덕희",
    },
    {
      id: 11,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "외계+인",
    },
    {
      id: 12,
      rating: 1,
      ratingDesc: "전체 관람가",
      name: "위시",
    },
    {
      id: 13,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "서울의봄",
    },
    {
      id: 14,
      rating: 4,
      ratingDesc: "청소년 관람불가",
      name: "엔드 오브 에바게리온",
    },
    {
      id: 15,
      rating: 3,
      ratingDesc: "15세 관람가",
      name: "시민덕희",
    },
    {
      id: 16,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "외계+인",
    },
    {
      id: 17,
      rating: 1,
      ratingDesc: "전체 관람가",
      name: "위시",
    },
    {
      id: 18,
      rating: 2,
      ratingDesc: "12세 관람가",
      name: "서울의봄",
    },
    {
      id: 19,
      rating: 4,
      ratingDesc: "청소년 관람불가",
      name: "엔드 오브 에바게리온",
    },
    {
      id: 20,
      rating: 3,
      ratingDesc: "15세 관람가",
      name: "시민덕희",
    },
  ];

  useEffect(() => {
    fetch('http://localhost:3000/api/movie/now_playing?page=1')
    .then(res => res.json())
    .then(res => {

      let list = [];
      list = res.map(ele => {
        return {
          id: ele.id,
          rating: ele.adult ? 4 : 1,
          ratingDesc: ele.adult ? '청소년 관람불가' : '전체 관람가',
          name: ele.title
        }
      })

      setMovieList(list);
    })
  }, []);

  const handleClickMovie = (event) => {
    setSelectedMovie(event.currentTarget.id);

    dispatch(setBook({ type: "movie", data: event.currentTarget.id }));
  };
  return (
    <div className={styled.box_movie}>
      <h3 className={styledCommon.tit_box}>
        영화<span className={styledCommon.screen_out}>선택</span>
      </h3>
      <ul className={`${styled.list_movie} ${styledCommon.scroll}`}>
        {movieList.map((item) => (
          <li
            key={item.id}
            className={selectedMovie === String(item.id) ? styled.on : ""}
          >
            <button type="button" id={item.id} onClick={handleClickMovie}>
              <RatingItem rating={item.rating} ratingDesc={item.ratingDesc} />
              <span>{item.name}</span>
              <span className={styled.like_movie}>
                <FavoriteBorderIcon fontSize="small" sx={{ fontSize: 14 }}>
                  선호하는 영화
                </FavoriteBorderIcon>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BoxMovie;
