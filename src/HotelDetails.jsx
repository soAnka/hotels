import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Hotel</h2>
      <h2>{id}</h2>
    </div>
  );
};

export default HotelDetails;
