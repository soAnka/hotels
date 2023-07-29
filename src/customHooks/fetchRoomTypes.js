const basicURL = "https://obmng.dbm.guestline.net/api/";

const fetchRoomTypes = async ({ queryKey }) => {
  const id = queryKey[1];

  const res = await fetch(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`
  );

  if (!res.ok) {
    throw new Error("Error while fetching room types");
  }

  return await res.json();
};

export default fetchRoomTypes;