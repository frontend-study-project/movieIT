import { useEffect, useState } from "react";
import PosterList from "../../../components/common/Poster/PosterList";
import { Box } from "@mui/material";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const ratingList = {
        'All': '전체 관람가',
        '12': '12세 이상 관람가',
        '15': '15세 이상 관람가',
        '18': '청소년 관람불가',
      }
    useEffect(() => {
        fetch("http://localhost:3000/api/movie/now_playing?page=1")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            let list = [];
            list = data.map((ele) => {
              console.log(ele)
              return {
                poster_path: ele.poster_path,
                id: ele.id,
                rating: ele.vote_average,
                ratingDesc: ratingList[ele.certification],
                name: ele.title,
              };
            });
            console.log("list", list);
            setMovieList(list);
          });
      }, []);
    return(
        <Box zIndex={3} position="relative">
            <PosterList data={movieList} />
        </Box>
    )
}
export default MovieList;