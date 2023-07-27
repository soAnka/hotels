import { useEffect, useState } from "react";

const ratingArr = [1, 2, 3, 4, 5];

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const [starRating, setStarRating] = useState(1);
  console.log(starRating);
  useEffect(() => {
    requestHotels();
  }, []);

  async function requestHotels() {
    const res = await fetch(
      "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
    );

    const data = await res.json();
    console.log(data);
    setHotels(data);
  }

  return (
    <div>
      <form>
        <label htmlFor="star rating">
          Star Rating
          <p>{starRating}</p>
          <select
            id="star rating"
            value={starRating}
            onChange={(e) => setStarRating(e.target.value)}
          >
            {ratingArr.map((star) => (
              <option key={star}>{star}</option>
            ))}
          </select>
        </label>
      </form>
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>{hotel.address1}</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
