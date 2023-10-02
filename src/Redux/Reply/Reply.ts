import {createSlice} from '@reduxjs/toolkit';

const initialState = {text: '', id: ''};

const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers: {
    setReply: (state, {payload}) => {
      state.id = payload.id;
      state.text = payload.text;
    },
    resetReply: () => initialState,
  },
});

export const replyReducer = replySlice.reducer;
export const {setReply, resetReply} = replySlice.actions;
