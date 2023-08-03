import { QueryFunction } from "@tanstack/react-query";
import { dataHotels } from "../APIResponsesInterface";

const fetchHotels: QueryFunction<dataHotels> = async () => {
  const res = await fetch(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  );

  if (!res.ok) {
    throw new Error("Error while fetching hotels");
  }
  const data = await res.json();

  return data;
};

export default fetchHotels;
