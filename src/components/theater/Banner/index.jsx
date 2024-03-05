import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from './banner.module.css';

const Banner = () => {
  // 배너 API Option
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={5}>
        추천 이벤트
      </Typography>
      <Box className={styled.box_style} borderRadius={6} boxShadow={3}>
        <Slider className="custom-slider" {...settings}>
          <div>
            <img className={styled.img} src="/images/theater/banner1.png" alt="Slide 1" />
          </div>
          <div>
            <img className={styled.img} src="/images/theater/banner2.png" alt="Slide 2" />
          </div>
          <div>
            <img className={styled.img} src="/images/theater/banner3.png" alt="Slide 3" />
          </div>
        </Slider>
      </Box>
    </>
  );
};

export default Banner;
