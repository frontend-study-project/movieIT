import { useMutation } from "@tanstack/react-query";
import * as authApi from '../api/auth.api';
import { useSnackbar } from "material-ui-snackbar-provider";

export const useLoginMutation = () => {
  const snackbar = useSnackbar();

  return useMutation({
    async mutationFn(form) {
      const response = await authApi.login(form);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    onSuccess({ token }) {
      authApi.setAuthorization(token);
      snackbar.showMessage('로그인 되었습니다.');
    },
    
    onError() {
      snackbar.showMessage('아이디 또는 비밀번호를 확인해주세요.')
    }
  })
};

export const useJoinMutation = () => {
  const snackbar = useSnackbar();

  return useMutation({
    async mutationFn(form) {
      const response = await authApi.join(form);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    onSuccess() {
      snackbar.showMessage('회원가입 되었습니다.');
    },
    
    onError() {
      snackbar.showMessage('문제가 발생하였습니다. 관리자에게 문의해주세요.');
    }
  })
}