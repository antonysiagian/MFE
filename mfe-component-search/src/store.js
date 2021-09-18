import { configureStore } from '@reduxjs/toolkit'
import searchAccordionSlice from './slices/searchAccordionSlice'

export const store = configureStore({
  reducer: {
    searchAccordionSlice
  },
})