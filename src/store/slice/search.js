import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 'B',
  date: '',
};

const reducers = {
 setSearch(state, { payload: search }) {
  state.type = search.type;
  state.date = search.date;
 }
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers,
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
