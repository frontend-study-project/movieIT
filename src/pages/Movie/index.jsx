import TabPannel from "../../components/common/Tab/TabPannel";
import Title from "../../components/common/Title/Title";
import MovieList from "../../components/movie/MovieList/MovieList";
import styled from "./movie.module.css";
const Movie = () => {
  const menu = [
    { id: 0, value: '박스오피스', label: '박스오피스' , content: <MovieList/>},
    { id: 1, value: '상영예정작', label: '상영예정작', content: <MovieList/>},
    { id: 2, value: '특별상영', label: '특별 상영', content: <MovieList/>}
  ]




  return (
    <div className={styled.wrapper_movie}>
      <Title title="전체영화" />
      <TabPannel menuArr={menu} />
    </div>
  );
};
export default Movie;
