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
        fetch("https://port-0-movieit-backend-fhrtg2blubc29w6.sel5.cloudtype.app/api/movie/now_playing?page=1")
          .then((res) => res.json())
          .then((data) => {
            let list = [];
            list = data.map((ele) => {
              return {
                id: ele.id,
                poster_path: ele.poster_path,
                certification: ele.certification,
                ratingDesc: ratingList[ele.certification],
                name: ele.title,
                voteAverage: ele.vote_average,
                releaseDate: ele.release_date,
                description: ele.overview
              };
            });
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