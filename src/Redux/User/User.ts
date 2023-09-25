import {createSlice} from '@reduxjs/toolkit';
import {userSignIn, userSignUp} from '../operations';

const initialState = {
  token: '',
  fullName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload;
    },
    resetUser: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
    });
  },
});

export const userReducer = userSlice.reducer;
export const {setToken, resetUser} = userSlice.actions;
