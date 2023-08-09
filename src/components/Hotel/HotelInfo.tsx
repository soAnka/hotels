import { AiFillStar } from "react-icons/ai";

interface HotelInfoProps {
  name: string;
  starRating: number;
  address1: string;
  address2: string;
  town: string;
  description?: string;
}

const HotelInfo = ({
  name,
  starRating,
  address1,
  address2,
  town,
  description,
}: HotelInfoProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="hotel_name flex">
        {name}{" "}
        <span className="flex pl-2">
          {[...Array(+starRating)].map((comp, i) => (
            <AiFillStar key={i} size={12} color="orange"></AiFillStar>
          ))}
        </span>
      </h4>
      <div className="hotel_address">
        <p>{address1},</p>
        <span>{address2}</span>
        <span>{town}</span>
      </div>
      <p className="hotel_description">{description}</p>
    </div>
  );
};

export default HotelInfo;
