import { configureStore } from "@reduxjs/toolkit";
import hotels from "./hotelsSlice";
import rooms from "./roomsSlice";

export const store = configureStore({
  reducer: {
    hotels,
    rooms,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
