import { Box } from "@mui/system";
import { useFetchUserQuery, useLogoutMutation } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import styled from './auth.nav.module.css';

const AuthNav = ({ isSub }) => {
  const { data: user } = useFetchUserQuery();
  const logout = useLogoutMutation();
  
  return (
    <Box className={`${styled.authnav} ${isSub ? styled.sub : ''}`}>
      <Box component="ul">
        {
          user ? (
            <>
              <li><Link to="#logout" onClick={logout.mutate}>로그아웃</Link></li>
              <li><Link to="/book">빠른예매</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/join">회원가입</Link></li>
            </>
          )
        }
      </Box>
    </Box>
  )
};

export default AuthNav;
