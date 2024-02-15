import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './slice/search';

export default configureStore({
  reducer: {
    search: SearchReducer,
  }
})