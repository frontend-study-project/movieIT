import { createSlice } from '@reduxjs/toolkit';

const theaterSlice = createSlice({
  name: 'theater',
  initialState,
  reducers,
});

const initialState = {
  rnum: 0, // 순번을 출력
  rank: '', // 해당일자의 박스오피스 순위
  rankInten: '', // 전일대비 순위의 증감분을 출력
  rankOldAndNew: '', // 랭킹에 신규진입여부를 출력 [OLD : 기존, NEW: 신규]
  movieCd: '', // 영화의 대표코드
  movieNm: '', // 영화명(국문)을 출력
  openDt: '', // 	영화의 개봉일 (yyyy-mm-dd)
  salesAmt: '', // 해당일의 매출액
  salesShare: '', // 	해당일자 상영작의 매출총액 대비 해당 영화의 매출비율을 출력
  salesInten: '', // 전일 대비 매출액 증감분을 출력
  salesChange: '', // 전일 대비 매출액 증감 비율을 출력
  salesAcc: '', // 누적매출액을 출력
  audiCnt: '', // 해당일의 관객수를 출력
  audiInten: '', // 전일 대비 관객수 증감분을 출력
  audiChange: '', // 전일 대비 관객수 증감 비율을 출력
  audiAcc: '', // 누적관객수를 출력
  scrnCnt: '', // 해당일자에 상영한 스크린수를 출력
  showCnt: '', // 해당일자에 상영된 횟수를 출력
};

const reducers = {
  setTheater(state, { payload }) {
    const { type, data } = payload;
    state[type] = data;
  },
  setPage(state, { payload: page }) {
    state.pageNum = page;
  },
};

export const { setBook, setPage } = theaterSlice.actions;
export default theaterSlice.reducer;
