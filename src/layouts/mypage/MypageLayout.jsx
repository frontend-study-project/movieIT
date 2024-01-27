import styled from './mypage.layout.module.css';
import layout from '../layout.module.css';
import Header from '../Header';
import { Outlet, useNavigate } from 'react-router-dom';
import MypageNav from './MypageNav';
import { Box } from '@mui/material';
import { useFetchUserQuery } from '../../hooks/useAuth';
import Loading from '../../components/common/Loading/Loading';
import Footer from '../Footer';

const MypageLayout = () => {
  const { data: user, isFetched, isLoading } = useFetchUserQuery();
  const navigate = useNavigate();

  if (isFetched && !user) {
    navigate('/');
  }

  return (
    <>
      <Header />
      {
        !isLoading ? (
          <main className={`${layout.main} ${styled.main}`}>
            <MypageNav />
            <Box flex={1}>
              <Outlet />
            </Box>
          </main>
        ) : (
          <Loading />
        )
      }
      <Footer />
    </>
  )
}

export default MypageLayout;
