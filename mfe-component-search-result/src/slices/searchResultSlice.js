import { SEARCH_RESULT_DATA }  from './data/searchResultData';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: { options: SEARCH_RESULT_DATA, splitViewIsOpen: true, sortDirection: 'down', selectedItems: [], unread: [] } ,
}

export const searchResultSlice = createSlice({
  name: 'searchResultSlice',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }, 
    closeView: (state) => {
      state.value.splitViewIsOpen = false;
    },
    openView: (state) => {
      state.value.splitViewIsOpen = true;
    }, 
    setSelected: (state, action) =>{
      state.value.selectedItems = action.payload;
    },
    setUnRead: (state, action) =>{
      state.value.undread = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, closeView, openView, setSelected, setUnRead } = searchResultSlice.actions

export default searchResultSlice.reducer