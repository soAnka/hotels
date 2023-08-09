import { Link } from "react-router-dom";
import { Image } from "../../typesAndInterfaces/APIResponsesInterface";
import { useGetRoomsQuery } from "../../store/apiSlice";
import Spinner from "../Spinner";
import HotelInfo from "./HotelInfo";
import AvailableRooms from "../Room/AvailableRooms";

interface HotelProps {
  id: string;
  name: string;
  address: string;
  address2: string;
  town: string;
  images: Image[];
  stars: number;
  loading?: string;
  numberAdults: number;
  numberChildren: number;
}

const Hotel = ({
  id,
  name,
  address,
  address2,
  town,
  images,
  stars,
  numberAdults,
  numberChildren,
}: HotelProps) => {
  const { data, error, isLoading } = useGetRoomsQuery(id);

  if (error) {
    throw new Error("Error");
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div key={id} className="hotel_card">
      <Link to={`/details/${id}`} className="h-full w-6/12 cursor-pointer">
        <div
          className="hotel_card_photo min-h-2/6 h-full max-h-full w-full rounded-lg "
          style={{
            backgroundImage: `url(${images[0].url})`,
          }}
        ></div>
      </Link>

      <div className="hotel_info--card p-4">
        <Link to={`/details/${id}`} className="pointer">
          <HotelInfo
            name={name}
            address1={address}
            address2={address2}
            starRating={stars}
            town={town}
          />
        </Link>
        <div className="font-thin">
          <p className="pb-2 pt-4 font-medium tracking-wide">
            Available Rooms:
          </p>
          {data?.rooms && (
            <AvailableRooms
              rooms={data.rooms}
              numberChildren={numberChildren}
              numberAdults={numberAdults}
              type="linkItem"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
