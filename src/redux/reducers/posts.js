import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addedPost: {}
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{
    setAddedPost: (state, action)=>{
      state.addedPost = action.payload
    }
  }
})

export default postSlice.reducer