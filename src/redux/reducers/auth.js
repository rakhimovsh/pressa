import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  user: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setLogin:(state, action)=>{
      state.login = action.payload
    },
    setUser:(state, action)=>{
      state.user = action.payload
    }
  }
})

export default authSlice.reducer