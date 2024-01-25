import { Typography } from "@mui/material";

const ErrorTypography = ({ children }) => (
  <Typography
    color="red" 
    fontSize="13px"
    marginTop="5px"
  >
    {children}
  </Typography>
);

export default ErrorTypography;
