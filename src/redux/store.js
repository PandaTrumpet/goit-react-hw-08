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
<<<<<<< Updated upstream
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'auth',
  
  storage,
  whitelist:['token']
}
const persistedReducer = persistReducer(persistConfig, authreducer)
=======
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedReducer = persistReducer(persistConfig, authreducer);

>>>>>>> Stashed changes
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

<<<<<<< Updated upstream
export const  persistor = persistStore(store)
=======
export const persistor = persistStore(store);
>>>>>>> Stashed changes
