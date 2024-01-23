import { useSnackbar } from "material-ui-snackbar-provider";

export const useMSnackbar = () => {
  const snackbar = useSnackbar();
  return (message, customParam) => {
    snackbar.showMessage(message, undefined, undefined, customParam);
  }
};
