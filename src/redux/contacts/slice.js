import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts } from "./operations";

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
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      }),
});

export default slice.reducer;
