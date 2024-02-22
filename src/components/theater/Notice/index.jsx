import { useEffect, useRef } from 'react';
import { Typography, List } from '@mui/material';
import NoticeListHeader from './NoticeListHeader';
import NoticeListText from './NoticeListText';

const Notice = () => {
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
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={4}>
        공지사항
      </Typography>
      <List>
        <NoticeListHeader primaryText={['극장', '제목', '지역', '등록일']} flexValues={[1, 4, 1, 1]} />
        <NoticeListText flexValues={[1, 4, 1, 1]} />
      </List>
      <div ref={mapRef} style={{ width: '500px', height: '500px' }}></div>;
    </>
  );
};

export default Notice;
