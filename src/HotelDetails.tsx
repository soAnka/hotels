import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "./store/store";

const HotelDetails = () => {
  const { id } = useParams();
  const { hotels } = useSelector((state: RootState) => state.hotels);

  const hotelData = hotels.filter((h) => h.id === id);

  return (
    <div>
      {hotelData.map((hotel) => (
        <p key={hotel.id}>{hotel.name}</p>
      ))}
    </div>
  );
};

export default HotelDetails;
