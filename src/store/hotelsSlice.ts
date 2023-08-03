import { createSlice } from "@reduxjs/toolkit";
import { dataHotels } from "../APIResponsesInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllHotels = createAsyncThunk("hotels", async () => {
  const res = await fetch(
    `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`
  );
  const data = await res.json();
  return data;
});

interface HotelsState {
  hotels: dataHotels;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState: HotelsState = {
  hotels: [],
  loading: "idle",
  error: "",
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllHotels.fulfilled, (state, action) => {
      return {
        ...state,
        hotels: [...action.payload],
      };
    });
    builder.addCase(fetchAllHotels.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllHotels.rejected, (state) => {
      (state.loading = "failed"),
        (state.error = "Something went wrong while fetching data hotels");
    });
  },
});

export default hotelsSlice.reducer;