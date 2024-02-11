import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNum: 1,
  date: '',
  movie: '',
  area: '',
  screen: '',
  theaterNum: '',
  hour: {
    timeStart: '',
    timeEnd: ''
  }
}

const reducers ={
  setBook(state, {payload}) {
    const {type, data} = payload;
    state[type] = data;
  },
  setPage(state, {payload: page}) {
    state.pageNum = page;
  }
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers
})

export const { setBook, setPage } = bookSlice.actions;
export default bookSlice.reducer;