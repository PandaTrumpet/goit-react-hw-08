import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = true;
      }),
});

export default slice.reducer;
