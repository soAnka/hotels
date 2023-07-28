import { useState } from "react";
import Hotel from "./Hotel";
import useHotels from "./customHooks/useHotels";

const ratingArr = [1, 2, 3, 4, 5];

const HomePage = () => {
  const [hotels, loading] = useHotels("hotels?collection-id=OBMNG");
  const [starRating, setStarRating] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  return (
    <div>
      <form>
        <label htmlFor="star rating">
          Star Rating
          <p>{numChildren}</p>
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
        <label htmlFor="number of adults">
          <input
            type="number"
            value={numAdults}
            onChange={(e) => setNumAdults(+e.target.value)}
          />
        </label>
        <label htmlFor="number of children">
          <input
            type="number"
            value={numChildren}
            onChange={(e) => setNumChildren(+e.target.value)}
          />
        </label>
      </form>
      <div>
        {hotels
          .filter((hotel) => +hotel.starRating >= starRating)
          .map((hotel) => (
            <Hotel
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              images={hotel.images}
              numberAdults={numAdults}
              numberChildren={numChildren}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
