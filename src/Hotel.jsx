import useHotels from "./customHooks/useHotels";
import { Link } from "react-router-dom";

const Hotel = ({ id, name, images, numberAdults, numberChildren }) => {
  const [hotels, loading] = useHotels(`roomRates/OBMNG/${id}`);

  return (
    <div key={id}>
      <img src={`${images[0].url}`} />
      <Link to={`/details/${id}`}>
        <h4>{name}</h4>
      </Link>

      <div>
        {hotels.rooms ? (
          <div>
            {hotels.rooms
              .filter(
                (room) =>
                  room.occupancy.maxChildren >= numberChildren &&
                  room.occupancy.maxAdults >= numberAdults
              )
              .map((room) => (
                <div key={room.id}>{room.name}</div>
              ))}
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default Hotel;
