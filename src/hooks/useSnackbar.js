import { useSnackbar as useSnackbarProvider } from "material-ui-snackbar-provider";

export const useSnackbar = () => {
  const snackbar = useSnackbarProvider();
  return (message, customParam) => {
    snackbar.showMessage(message, undefined, undefined, customParam);
  }
};
