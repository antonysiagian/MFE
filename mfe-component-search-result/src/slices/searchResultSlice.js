import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const searchResultSlice = createSlice({
  name: 'searchResultSlice',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { set } = searchResultSlice.actions

export default searchResultSlice.reducer