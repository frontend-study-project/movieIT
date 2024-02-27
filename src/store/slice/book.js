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
    seatCategory: {adult: 0, teenager: 0, senior: 0, challenged: 0},
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
  setAddCate(state, {payload}) {
    const {step, type, dataId} = payload;
    state[step][type][dataId] += 1;
  },
  setMinusCate(state, {payload}) {
    const {step, type, dataId} = payload;
    state[step][type][dataId] -= 1;
  },
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers
})

export const { setBook, setPage, setAddCate, setMinusCate } = bookSlice.actions;
export default bookSlice.reducer;