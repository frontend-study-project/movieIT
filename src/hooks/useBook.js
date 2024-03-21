import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/slice/alert";
import { getAuthorization } from "../api/auth.api";

export const useSaveBookingMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (data) => {
      const response = await fetch("http://localhost:3000/api/reservation", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAuthorization()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data, auditorium: ''}),
      });
      if (!response.ok) throw new Error();

      return response;
    },

    onSuccess: () => {
      dispatch(setAlert({
        open: true,
        title: '예매가 완료되었습니다!',
        btnList: [{autoFocus: true, txt: '확인'}],
        isBookCompleted: true
      }))
    },
    onError: () => {
      dispatch(setAlert({
        open: true,
        title: '예매 정보를 확인해주세요.',
        btnList: [{autoFocus: true, txt: '확인'}],
      }))
    }
  });
};
