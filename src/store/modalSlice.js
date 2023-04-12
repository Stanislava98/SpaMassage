import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
    children: <></>,
  },
  reducers: {
    openDialog: (state, action) => {
      state.isOpened = true;
      state.children = action.payload;
    },
    closeDialog: (state) => {
      state.isOpened = false;
      state.children = <></>;
    },
  },
});

export const { openDialog, closeDialog } = modalSlice.actions;

export default modalSlice.reducer;
