import RatingItem from '../Components/RatingItem';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styledCommon from '../book.module.css';
import styled from './StepOne.module.css';

const BoxMovie = () => {
  const dummyMovieList = [
    {
      id: 1,
      rating: 2,
      ratingDesc: '12세 관람가', 
      name: "외계+인",
    },
    {
      id: 2,
      rating: 1,
      ratingDesc: '전체 관람가',
      name: "위시",
    },
    {
      id: 3,
      rating: 2,
      ratingDesc: '12세 관람가',
      name: "서울의봄",
    },
    {
      id: 4,
      rating: 4,
      ratingDesc: '청소년 관람불가',
      name: "엔드 오브 에바게리온",
    },
    {
      id: 5,
      rating: 3,
      ratingDesc: '15세 관람가',
      name: "시민덕희",
    },
    {
      id: 1,
      rating: 2,
      ratingDesc: '12세 관람가', 
      name: "외계+인",
    },
    {
      id: 2,
      rating: 1,
      ratingDesc: '전체 관람가',
      name: "위시",
    },
    {
      id: 3,
      rating: 2,
      ratingDesc: '12세 관람가',
      name: "서울의봄",
    },
    {
      id: 4,
      rating: 4,
      ratingDesc: '청소년 관람불가',
      name: "엔드 오브 에바게리온",
    },
    {
      id: 5,
      rating: 3,
      ratingDesc: '15세 관람가',
      name: "시민덕희",
    },
    {
      id: 1,
      rating: 2,
      ratingDesc: '12세 관람가', 
      name: "외계+인",
    },
    {
      id: 2,
      rating: 1,
      ratingDesc: '전체 관람가',
      name: "위시",
    },
    {
      id: 3,
      rating: 2,
      ratingDesc: '12세 관람가',
      name: "서울의봄",
    },
    {
      id: 4,
      rating: 4,
      ratingDesc: '청소년 관람불가',
      name: "엔드 오브 에바게리온",
    },
    {
      id: 5,
      rating: 3,
      ratingDesc: '15세 관람가',
      name: "시민덕희",
    },
    {
      id: 1,
      rating: 2,
      ratingDesc: '12세 관람가', 
      name: "외계+인",
    },
    {
      id: 2,
      rating: 1,
      ratingDesc: '전체 관람가',
      name: "위시",
    },
    {
      id: 3,
      rating: 2,
      ratingDesc: '12세 관람가',
      name: "서울의봄",
    },
    {
      id: 4,
      rating: 4,
      ratingDesc: '청소년 관람불가',
      name: "엔드 오브 에바게리온",
    },
    {
      id: 5,
      rating: 3,
      ratingDesc: '15세 관람가',
      name: "시민덕희",
    },
  ];
  return <div className={styled.box_movie}>
  <h3 className={styledCommon.tit_box}>
    영화<span className={styledCommon.screen_out}>선택</span>
  </h3>
  <ul className={`${styled.list_movie} ${styledCommon.scroll}`}>
    {dummyMovieList.map((item, idx) => (
      <li key={item.id}>
        <button type='button' className={idx === 1 ? styled.on : null}>
          <RatingItem rating={item.rating} ratingDesc={item.ratingDesc} />
          <span>{item.name}</span>
          <span className={styled.like_movie}>
            <FavoriteBorderIcon fontSize="small" sx={{ fontSize: 14 }}>선호하는 영화</FavoriteBorderIcon>
          </span>
        </button>
      </li>
    ))}
  </ul>
</div>
}
export default BoxMovie;