import {createSlice} from '@reduxjs/toolkit';
import {userSignIn, userSignUp} from '../operations';

const initialState = {
  token: '',
  fullName: '',
  _id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
      state._id = action.payload._id;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
      state._id = action.payload._id;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { resetUser} = userSlice.actions;
