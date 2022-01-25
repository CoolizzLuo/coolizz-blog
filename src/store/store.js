import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice'
// import postReducer from './features/post/counterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    // post: postReducer
  },
})
