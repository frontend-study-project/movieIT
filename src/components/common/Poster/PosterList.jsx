import { Box, Button, CardContent, Grid, Typography } from '@mui/material';
import styled from './poster.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import moment from 'moment';
import { getImageUrl } from '../../../hooks/useImageUrl';
import RatingItem from '../../book/CommonItem/RatingItem';

const Poster = ({ image, rating, certification, heart, description, poster_path, voteAverage, releaseDate, name }) => {
  return (
    <div className={styled.poster}>
      <Card className={styled.poster_thumnail}>
        <CardMedia
          component="img"
          image={poster_path? getImageUrl(poster_path) : image}
          alt="Paella dish"
        />
        <CardContent style={{ padding: '25px' }} className={styled['poster_thumnail-cover']}>
          <Typography 
            variant="body2" 
            color="#fff" 
            fontSize="14px" 
            className={styled['poster_thumnail-cover_content']}
          >
            {description}
          </Typography>

          <Divider component="li" style={{ borderColor: '#737373' }} />

          <div className={styled.poster_review}>
            <span>관람평</span>
            <span>{rating}</span>
          </div>
        </CardContent>
      </Card>
      {certification && name ?
        <Box className={styled.buttons} display="flex" gap={0} >
          <Box variant="outlined" style={{ color: "black", borderColor: "#787878" }}>
            <RatingItem rating={certification}/>
          </Box>
          <Box variant="outlined" style={{ color: "black", borderColor: "#787878" }}>
            <span className={styled['title']}>{name}</span>
          </Box>
        </Box> : null
      }
      {voteAverage && releaseDate ? 
        <Box className={styled.buttons} display="flex" gap={2} >
          <Box variant="outlined" style={{ color: "black", borderColor: "#787878" }}>
            <span>예매율</span>
            <span className={styled['vote-avr']}>{voteAverage}%</span>
          </Box>
          |
          <Box variant="outlined" style={{ color: "black", borderColor: "#787878" }}>
            <span>개봉일</span>
            <span className={styled['vote-avr']}>{moment(releaseDate).format("YYYY.MM.DD")}</span>
          </Box>
        </Box> : null
      }
      <Box className={styled.buttons} display="flex" gap={2} justifyContent="space-between">
        <Button variant="outlined" style={{ backgroundColor: "#2b2b2b", color: "#fff", borderColor: "#787878" }}>
          <i className={styled.heart} />
          <span className={styled['heart-num']}>{heart}</span>
        </Button>
        <Button variant="contained" style={{ flex: 1 }}>예매</Button>
      </Box>
    </div>
  )
};

const PostList = ({ data }) => {
  console.log("data", data);
  return (
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
      {
        data.map((poster) => (
          <Grid key={poster.id} item xs={1}>
            <Poster {...poster} />
          </Grid>
        ))
      }
    </Grid>
  )
};

export default PostList;
