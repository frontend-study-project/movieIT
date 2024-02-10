import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as authApi from '../api/auth.api';
import { useSnackbar } from "./useSnackbar";
import { useNavigate } from 'react-router-dom';
import { CURRENT_PASSWORD_EQUAL, CURRENT_PASSWORD_NOT_EQUAL, NEW_PASSWORD_NOT_EQUAL } from "../api/error/auth";

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
      navigate('/', { replace: true });
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

    onSuccess(user) {
      snackbar('회원정보가 수정 되었습니다.');
      queryClient.setQueryData(['user'], user, { updatedAt: Date.now() });
    },
    
    onError() {
      snackbar('문제가 발생하였습니다. 관리자에게 문의해주세요.', { type: 'error' });
    }
  })
}

export const useChangePasswordMutation = () => {
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  return useMutation({
    async mutationFn(form) {
      const response = await authApi.changePassword(form);

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      return response.json();
    },

    onSuccess() {
      snackbar('비밀번호가 수정 되었습니다.');
      navigate('/mypage/update');
    },
    
    onError({ message: errorCode }) {
      if (errorCode === CURRENT_PASSWORD_NOT_EQUAL) {
        snackbar('현재 비밀번호가 일치하지 않습니다.', { type: 'error' });
      }

      if (errorCode === CURRENT_PASSWORD_EQUAL) {
        snackbar('현재 비밀번호와 동일합니다. 새로운 비밀번호를 입력해주세요.', { type: 'error' });
      }

      if (errorCode === NEW_PASSWORD_NOT_EQUAL) {
        snackbar('비밀번호가 일치하지 않습니다.', { type: 'error' });
      }
    }
  });
}

export const useLogoutMutation = () => {
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn() {
      authApi.setAuthorization('');
      queryClient.setQueryData(['user'], null, { updatedAt: Date.now() });

      snackbar('로그아웃 되었습니다.');
      navigate('/');
    }
  });
}