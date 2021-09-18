import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const searchAccordionSlice = createSlice({
  name: 'searchAccordionSlice',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { set } = searchAccordionSlice.actions

export default searchAccordionSlice.reducer