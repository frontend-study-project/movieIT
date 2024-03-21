import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: '',
  content: '',
  btnList: [], 
  isBookCompleted: false
}

const reducers = {
  setAlert(state, {payload: data}) {
    Object.entries(data).forEach(([key, value]) => {
      state[key] = value;
    });
  }
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers
});

export const {setAlert} = alertSlice.actions;
export default alertSlice.reducer;