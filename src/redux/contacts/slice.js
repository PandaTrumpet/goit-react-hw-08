import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { findContact } from "../filters/slice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    token: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // state.token = action.payload.token;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        // state.token = action.payload.token;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // state.token = action.payload.token;
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(findContact.fulfilled, (state, action) => {}),
});

export default slice.reducer;
