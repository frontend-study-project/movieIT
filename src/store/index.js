import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './slice/search';
import BookReducer from './slice/book';
import AlertReducer from './slice/alert';

export default configureStore({
  reducer: {
    search: SearchReducer,
    book: BookReducer,
    alert: AlertReducer
  }
})