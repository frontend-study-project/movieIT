import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PasswordColumn = () => (
  <Button 
    variant="outlined" 
    to="/mypage/password"
    LinkComponent={Link} 
  >
    비밀번호 변경
  </Button>
);

export default PasswordColumn;
