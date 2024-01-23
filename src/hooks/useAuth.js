import { useMutation } from "@tanstack/react-query";
import * as authApi from '../api/auth.api';
import { useMSnackbar } from "./useMSnackbar";
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const snackbar = useMSnackbar();
  const navigate = useNavigate();
  
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
      snackbar('로그인 되었습니다.');
      navigate('/');
    },
    
    onError() {
      snackbar('아이디 또는 비밀번호를 확인해주세요.', { type: 'error' });
    }
  })
};

export const useJoinMutation = () => {
  const snackbar = useMSnackbar();
  const navigate = useNavigate();

  return useMutation({
    async mutationFn(form) {
      const response = await authApi.join(form);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    onSuccess() {
      snackbar('회원가입 되었습니다.');
      navigate('/login');
    },
    
    onError() {
      snackbar('문제가 발생하였습니다. 관리자에게 문의해주세요.', { type: 'error' });
    }
  })
};

export const useCheckDuplicateIdMutation = () => {
  return useMutation({
    async mutationFn(id) {
      const response = await authApi.checkDuplicateId(id);

      if (!response.ok) {
        throw new Error();
      }

      return true;
    },
  })
}