import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  filters: {
    numStars: number;
    numAdults: number;
    numChildren: number;
  };
}

const initialState: FiltersState = {
  filters: {
    numStars: 1,
    numAdults: 0,
    numChildren: 0,
  },
};
export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          numAdults: action.payload.numAdults,
          numChildren: action.payload.numChildren,
          numStars: action.payload.starRating,
        },
      };
    },
    defaultState: (state, action) => {
      return state;
    },
  },
});

export const { updateFilters, defaultState } = filtersSlice.actions;
export default filtersSlice.reducer;
