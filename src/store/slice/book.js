import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: '',
  movie: '',
  theater: {area: '', place: ''},
  hour: ''
}

const reducers ={
  setBook(state, action) {

  }
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers
})

export default bookSlice.reducers;