import { Box, Typography } from "@mui/material";
import PosterList from "../../components/common/Poster/PosterList";
import styled from './main.module.css';
import SearchLink from "../../components/main/SearchLink/SearchLink";

const Main = () => {
  const data = [{
    id: 1,
    image: "https://img.megabox.co.kr/SharedImg/2023/12/18/9jyGCFBkMW31zk7XRFD3PkdTOdnEvZXd_420.jpg",
    rating: 8.5,
    description: "반드시 돌아가야 한다. 모두를 지키기 위해",
    heart: '1.9k'
  }, {
    id: 2,
    image: "https://img.megabox.co.kr/SharedImg/2023/12/18/9jyGCFBkMW31zk7XRFD3PkdTOdnEvZXd_420.jpg",
    rating: 8.5,
    description: "반드시 돌아가야 한다. 모두를 지키기 위해",
    heart: '1.9k'
  }, {
    id: 3,
    image: "https://img.megabox.co.kr/SharedImg/2023/12/18/9jyGCFBkMW31zk7XRFD3PkdTOdnEvZXd_420.jpg",
    rating: 8.5,
    description: "반드시 돌아가야 한다. 모두를 지키기 위해",
    heart: '1.9k'
  }, {
    id: 4,
    image: "https://img.megabox.co.kr/SharedImg/2023/12/18/9jyGCFBkMW31zk7XRFD3PkdTOdnEvZXd_420.jpg",
    rating: 8.5,
    description: "반드시 돌아가야 한다. 모두를 지키기 위해",
    heart: '1.9k'
  }];

  return (
    <Box className={styled.main} component="section" paddingTop="100px">
      <Box className={styled.cover}>
        <Box className={styled.pattern} />
        <img src="/images/main/alien.jpg" />
      </Box>
      <Box display="flex" justifyContent="center" zIndex={3} position="relative">
        <Typography
          className={styled.main_title}
          variant="body2" 
          color="#fff" 
          fontSize="15px"
          marginBottom="20px"
          fontWeight="700"
        >
          박스오피스
        </Typography>
        <Typography 
          className={styled.more} 
          fontSize="15px"
          color="#aaa"
        >
          더 많은 영화보기
        </Typography>
      </Box>
      <Box zIndex={3} position="relative">
        <PosterList data={data} />
      </Box>
      <SearchLink />
      <Box className={styled["mouse-animation"]} display="flex" justifyContent="center">
        <i className={styled.mouse} />
      </Box>
    </Box>
  )
};

export default Main;