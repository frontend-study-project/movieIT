import Banner from '../../components/theater/Banner';
import TheaterList from '../../components/theater/Theater';
import Notice from '../../components/theater/Notice';

const Theater = () => {
  return (
    <>
      {/* 추천이벤트 배너 component */}
      <Banner />
      {/* 전체극장 component */}
      <TheaterList />
      {/* 공지사항 component */}
      <Notice />
    </>
  );
};
export default Theater;
