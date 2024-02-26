import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  stepOne: {
    date: '',
    movie: '',
    area: '',
    theater: '',
    runningTime: {
      timeStart: '',
      timeEnd: ''
    },
  },
  stepTwo: {
    totalNum: 0,
    selectedSeats: []
  }
}

const reducers ={
  setBook(state, {payload}) {
    const {step, type, data} = payload;
    state[step][type] = data;
  },
  setPage(state, {payload: page}) {
    state.page = page;
  },
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers
})

export const { setBook, setPage } = bookSlice.actions;
export default bookSlice.reducer;