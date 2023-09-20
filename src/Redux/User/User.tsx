import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const {setToken} = userSlice.actions;
