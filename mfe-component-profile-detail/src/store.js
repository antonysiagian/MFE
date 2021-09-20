import { configureStore } from '@reduxjs/toolkit'
import customerProfileSlice from './slices/customerProfileSlice'

export const store = configureStore({
  reducer: {
    customerProfileSlice
  },
})