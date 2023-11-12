import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
   
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    
    setUser: (state, action) => {
      state.user= action.payload;
     
    },
    removeUser: (state) => {
        state.user= null;
    },
    setLoading: (state, {payload}) => {
      state.loading= payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser} = userSlice.actions

export default userSlice.reducer