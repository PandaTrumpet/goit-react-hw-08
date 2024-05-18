import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
export const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: false,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: "",
          email: "",
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = true;
<<<<<<< Updated upstream
      }).addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true
=======
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
>>>>>>> Stashed changes
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
<<<<<<< Updated upstream
      })
=======
      }),
>>>>>>> Stashed changes
});

export default slice.reducer;
