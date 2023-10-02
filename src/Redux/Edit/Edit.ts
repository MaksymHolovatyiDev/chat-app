import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  text: '',
  editId: '',
};

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setEdit: (state, {payload}) => {
      state.editId = payload.id;
      state.text = payload.text;
    },
    resetEdit: () => initialState,
  },
});

export const editReducer = editSlice.reducer;
export const {setEdit, resetEdit} = editSlice.actions;
