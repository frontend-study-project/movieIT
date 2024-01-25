import { Alert, Snackbar } from "@mui/material";
import { SnackbarProvider as Provider } from "material-ui-snackbar-provider";

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

const SnackbarProvider = ({ children }) => {
  const SnackbarProps = { 
    autoHideDuration: 4000, 
    anchorOrigin: { 
      vertical: 'top', 
      horizontal: 'center' 
    } 
  };
  
  return (
    <Provider SnackbarProps={SnackbarProps} SnackbarComponent={MAlert}>
      {children}
    </Provider>
  )
};

export default SnackbarProvider;
