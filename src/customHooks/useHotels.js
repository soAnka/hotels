import { useState, useEffect } from "react";

const basicURL = "https://obmng.dbm.guestline.net/api/";

export default function useHotels(url) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestHotels();

    async function requestHotels() {
      const res = await fetch(basicURL + url);
      const dataResp = await res.json();

      setHotels(dataResp);
      setLoading(true);
    }
  }, []);

  return [hotels, loading];
}
