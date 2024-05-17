import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./auth/slice";
import contactReducer from "./contacts/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authreducer,
  },
});
