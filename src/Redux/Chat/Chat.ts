import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: '',
  reducers: {
    setChat: (_, {payload}) => payload,
  },
});

export const chatReducer = chatSlice.reducer;
export const {setChat} = chatSlice.actions;
