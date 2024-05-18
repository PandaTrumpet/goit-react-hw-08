import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    findContact(state, action) {
      state.name = action.payload;
    },
  },
});

export const { findContact } = slice.actions;
export default slice.reducer;
