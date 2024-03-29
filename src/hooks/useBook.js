import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/slice/alert";
import { getAuthorization } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { reset } from "../store/slice/book";
import { postReservation } from "../api/reservation.api";

export const useSaveBookingMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data) => {
      const response = await postReservation(data);
      if (!response.ok) throw new Error();

      return response;
    },

    onSuccess: () => {
      dispatch(
        setAlert({
          open: true,
          title: "예매를 완료하시겠습니까?",
          btnList: [
            { autoFocus: false, txt: "취소" , clickFn: () => {}},
            {
              autoFocus: true,
              txt: "확인",
              clickFn: () => {
                navigate("/mypage/booking");
                dispatch(reset());
              },
            },
          ],
        })
      );
    },
    onError: () => {
      dispatch(
        setAlert({
          open: true,
          title: "예매 정보를 확인해주세요.",
          btnList: [{ autoFocus: true, txt: "확인" , clickFn: () => {}}],
        })
      );
    },
  });
};
