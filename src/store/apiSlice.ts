import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://obmng.dbm.guestline.net/api/",
  }),
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: (name) => `hotels?collection-id=${name}`,
    }),
    getRooms: builder.query({
      query: (id) => `roomRates/OBMNG/${id}`,
    }),
  }),
});

export const { useGetAllHotelsQuery, useGetRoomsQuery } = hotelsApi;
