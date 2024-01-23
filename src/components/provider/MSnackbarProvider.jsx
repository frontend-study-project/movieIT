import { Alert, Snackbar } from "@mui/material";
import { SnackbarProvider } from "material-ui-snackbar-provider";

const MAlert = ({ message, SnackbarProps, customParameters = {} }) => {
  const { type = 'success' } = customParameters;

  return (
    <Snackbar
      {...SnackbarProps}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
};

const MSnackbarProvider = ({ children }) => {
  const SnackbarProps = { 
    autoHideDuration: 4000, 
    anchorOrigin: { 
      vertical: 'top', 
      horizontal: 'center' 
    } 
  };
  
  return (
    <SnackbarProvider SnackbarProps={SnackbarProps} SnackbarComponent={MAlert}>
      {children}
    </SnackbarProvider>
  )
};

export default MSnackbarProvider;
