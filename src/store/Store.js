import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "../features/userSlice"; // Adjust import path
import greetingReducer from "../features/GreetingsSlice"; // Adjust import path 

const persistConfig = {
  key: "user", // Key under which data is stored
  storage,
  // Other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, userSlice); // Use .reducer if userSlice is a slice

const store = configureStore({
  reducer: {
    user: persistedReducer,
    greeting: greetingReducer, // Add the slice reducer to the store
  },
});

const persistor = persistStore(store);
export { store, persistor };