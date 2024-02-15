import { useState, useEffect, useRef } from 'react';
import { Box, Tabs, Tab, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './theater.module.css';

const Theater = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const notices = [
    { id: 1, title: '공지사항 1', content: '이것은 첫 번째 공지사항입니다.' },
    { id: 2, title: '공지사항 2', content: '이것은 두 번째 공지사항입니다.' },
    { id: 3, title: '공지사항 3', content: '이것은 세 번째 공지사항입니다.' },
  ];

  const mapRef = useRef(null);
  const lat = 37.569238;
  const lng = 126.898364;

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  return (
    <>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={5}>
        추천 이벤트
      </Typography>
      <Box style={{ backgroundColor: '#F5eaf7', padding: '90px' }} borderRadius={6} boxShadow={3}>
        <Slider className="custom-slider" {...settings}>
          <div>
            <img height="400" width="1000" src="/images/theater/banner1.png" alt="Slide 1" />
          </div>
          <div>
            <img height="400" width="1000" src="/images/theater/banner2.png" alt="Slide 2" />
          </div>
          <div>
            <img height="400" width="1000" src="/images/theater/banner3.png" alt="Slide 3" />
          </div>
        </Slider>
      </Box>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={4}>
        전체극장
      </Typography>
      <Box width={1000} height={400} borderRadius={5} boxShadow={3} p={5}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary">
            <Tab sx={{ px: 4.5 }} label="서울" />
            <Tab sx={{ px: 4.5 }} label="경기" />
            <Tab sx={{ px: 4.5 }} label="인천" />
            <Tab sx={{ px: 4.5 }} label="대전/충청/세종" />
            <Tab sx={{ px: 4.5 }} label="부산/대구/경상" />
            <Tab sx={{ px: 4.5 }} label="광주/전라" />
            <Tab sx={{ px: 4.5 }} label="강원" />
            <Tab sx={{ px: 4.5 }} label="제주" />
          </Tabs>
        </Box>
        <List value={value}>
          <Paper elevation={1} square style={{ height: 370 }}>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">강남</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">강남대로(씨티)</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">강동</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">군자</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">더 부티크 목동현대백화점</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">동대문</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">마곡</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">목동</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">상봉</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">상암월드컵경기장</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">성수</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">센트럴</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">송파파크하비오</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">신촌</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">이수</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">창동</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">코엑스</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">홍대</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">화곡</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">ARTNINE</Typography>}></ListItemText>
            </ListItem>
          </Paper>
        </List>

        {/* <Typography variant="body1" style={{ padding: '16px' }}>
          {value === 0 && '강남'}
          {value === 1 && '고양스타필드'}
          {value === 2 && '검단'}
        </Typography> */}
      </Box>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={4}>
        공지사항
      </Typography>
      <List>
        <ListItem style={{ backgroundColor: '#E4e4e4', fontWeight: 'bolder' }}>
          <ListItemText
            style={{ flex: 1 }}
            primary={
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                극장
              </Typography>
            }
          />
          <ListItemText
            style={{ flex: 4 }}
            primary={
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                제목
              </Typography>
            }
          />
          <ListItemText
            style={{ flex: 1 }}
            primary={
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                지역
              </Typography>
            }
          />
          <ListItemText
            style={{ flex: 1 }}
            primary={
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                등록일
              </Typography>
            }
          />
        </ListItem>
        {notices.map(notice => (
          <Paper key={notice.id} elevation={1} style={{ padding: '20px' }}>
            <ListItem alignItems="flex-start">
              <ListItemText
                style={{ flex: 1 }}
                primary={
                  <Typography variant="body1" style={{ textAlign: 'center' }}>
                    평택비전
                  </Typography>
                }
              />
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText
                style={{ flex: 4 }}
                primary={
                  <Typography variant="body1" style={{ textAlign: 'center' }}>
                    [평택비전] 신규 지점 오픈 이벤트 안내 (~2/2까지)
                  </Typography>
                }
              />
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText
                style={{ flex: 1 }}
                primary={
                  <Typography variant="body1" style={{ textAlign: 'center' }}>
                    경기
                  </Typography>
                }
              />
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText
                style={{ flex: 1 }}
                primary={
                  <Typography variant="body1" style={{ textAlign: 'center' }}>
                    2024.01.22
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
      <div ref={mapRef} style={{ width: '500px', height: '500px' }}></div>;
    </>
  );
};
export default Theater;
