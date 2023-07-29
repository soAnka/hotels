const fetchHotels = async () => {
  const res = await fetch(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  );

  if (!res.ok) {
    throw new Error("Error while fetching hotels");
  }

  return await res.json();
};

export default fetchHotels;
