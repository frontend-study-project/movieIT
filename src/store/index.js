import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './slice/search';
import bookReducer from './slice/book';

export default configureStore({
  reducer: {
    search: SearchReducer,
    book: bookReducer,
  }
})