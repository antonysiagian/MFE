import { createSlice } from '@reduxjs/toolkit'
import { SEARCH_RESULT_DATA } from './data/searchResultData'

const initialState = {
  value: SEARCH_RESULT_DATA,
}

export const customerProfileSlice = createSlice({
  name: 'customerProfileSlice',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { set } = customerProfileSlice.actions

export default customerProfileSlice.reducer