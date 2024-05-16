import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./auth/slice";
import contactReducer from "./contacts/slice";
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authreducer,
  },
});
