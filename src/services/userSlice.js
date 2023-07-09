import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
 
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    
    userSignin: (state, action) => {
      state.user= action.payload;
     
    },
    userSignout: (state) => {
        state.user= null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSignin, userSignout} = userSlice.actions

export default userSlice.reducer