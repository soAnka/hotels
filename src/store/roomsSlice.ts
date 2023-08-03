import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HotelRoomsType } from "../Hotel";

export const fetchHotelRooms = createAsyncThunk("rooms", async (id: string) => {
  const res = await fetch(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`
  );
  const data = await res.json();
  return { data, id };
});

interface RoomsState {
  rooms: {
    [index: string]: HotelRoomsType;
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState: RoomsState = {
  rooms: {},
  loading: "idle",
  error: "",
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchHotelRooms.fulfilled, (state, action) => {
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.id]: {
            rooms: [...action.payload.data.rooms],
          },
        },
        loading: "succeeded",
      };
    });
    builder.addCase(fetchHotelRooms.pending, (state) => {
      state.loading = "pending";
    }),
      builder.addCase(fetchHotelRooms.rejected, (state) => {
        (state.loading = "failed"),
          (state.error = "Something went wrong while fetching data rooms");
      });
  },
});

export default roomsSlice.reducer;
