import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: '',
  movie: '',
  area: '',
  theater: '',
  hour: {
    timeStart: '',
    timeEnd: ''
  }
}

const reducers ={
  setBook(state, {payload}) {
    const {type, data} = payload;
    state[type] = data;
  }
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers
})

export const { setBook } = bookSlice.actions;
export default bookSlice.reducer;