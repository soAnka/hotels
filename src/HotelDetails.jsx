import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();

  return <div>Hotel id: {id}</div>;
};

export default HotelDetails;
