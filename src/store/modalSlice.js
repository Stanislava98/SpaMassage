import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
  },
  reducers: {
    openDialog: (state, action) => {
      state.isOpened = true;
    },
    closeDialog: (state, action) => {
      state.isOpened = false;
    },
  },
});

export const { openDialog, closeDialog } = modalSlice.actions;

export default modalSlice.reducer;
