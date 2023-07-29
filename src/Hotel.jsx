import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import fetchRoomTypes from "./customHooks/fetchRoomTypes";
import PhotosGallery from "./PhotosGallery";
import HotelDetails from "./HotelDetails";
import ErrorBoundary from "./ErrorBoundary";

const Hotel = ({ id, name, images, numberAdults, numberChildren }) => {
  const { data, isLoading, isError } = useQuery(["rooms", id], fetchRoomTypes);

  const hotelRooms = data?.rooms;

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    throw new Error("Error while fetching room types");
  }

  return (
    <div key={id}>
      <Link to={`/details/${id}`}>
        <h4>{name}</h4>
        <HotelDetails name={name} />
        <PhotosGallery images={images} />
      </Link>

      <div>
        {hotelRooms ? (
          <div>
            {hotelRooms
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
