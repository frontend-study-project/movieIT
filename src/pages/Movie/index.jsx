import Title from "../../components/common/Title/Title";
import styled from "./movie.module.css";
const Movie = () => {
  return (
    <div className={styled.wrapper_movie}>
      <Title title="영화" />
    </div>
  );
};
export default Movie;
