import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as authApi from '../api/auth.api';
import { useSnackbar } from "./useSnackbar";
import { useNavigate } from 'react-router-dom';

export const useFetchUserQuery = () => (
  useQuery({
    queryKey: ['user'],
    async queryFn() {
      const response = await authApi.fetchUser();

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    staleTime: 3 * 24 * 60 * 1000,
  })
);

export const useLoginMutation = () => {
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  return useMutation({
    async mutationFn(form) {
      const response = await authApi.login(form);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    onSuccess({ token, user }) {
      authApi.setAuthorization(token);
      queryClient.setQueryData(['user'], user, { updatedAt: Date.now() });

      snackbar('로그인 되었습니다.');
      navigate('/');
    },
    
    onError() {
      snackbar('아이디 또는 비밀번호를 확인해주세요.', { type: 'error' });
    }
  })
};

export const useJoinMutation = () => {
  const snackbar = useSnackbar();
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
  });
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
};

export const useUpdateUserMutation = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(form) {
      const response = await authApi.updateUser(form);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },

    onSuccess({ user }) {
      snackbar('회원정보가 수정 되었습니다.');
      queryClient.setQueryData(['user'], user, { updatedAt: Date.now() });
    },
    
    onError() {
      snackbar('문제가 발생하였습니다. 관리자에게 문의해주세요.', { type: 'error' });
    }
  })
}