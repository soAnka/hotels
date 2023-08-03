import { Link } from "react-router-dom";
import { Image, Room } from "./APIResponsesInterface";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect, useState } from "react";

type HotelRecord = {
  [index: string]: HotelRoomsType;
};

export type HotelRoomsType = {
  rooms: Room[];
};
export interface HotelProps {
  id: string;
  name: string;
  address: string;
  address2: string;
  images: Image[];
  stars: number;
  loading: string;
  hotelRooms: HotelRecord;
  numberAdults: number;
  numberChildren: number;
}

const Hotel = ({
  id,
  name,
  address,
  address2,
  images,
  loading,
  stars,
  numberAdults,
  numberChildren,
}: HotelProps) => {
  const [isLoading, setIsLoading] = useState("");
  const { rooms } = useSelector((state: RootState) => state.rooms);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  if (isLoading !== "succeeded") {
    return <p>loading</p>;
  }

  let key: keyof typeof rooms = id;

  const hotelFiltered = rooms
    ? rooms[key].rooms.filter(
        (room: Room) =>
          room.occupancy.maxChildren >= numberChildren &&
          room.occupancy.maxAdults >= numberAdults
      )
    : [];

  return (
    <div
      key={id}
      className="min-h-80 m-1 flex h-96 max-h-full w-full items-start  justify-start rounded-lg border bg-white text-sm shadow-lg shadow-slate-200"
    >
      <Link to={`/details/${id}`} className="h-full w-6/12 cursor-pointer">
        <div
          className="h-full w-full rounded-lg"
          style={{
            backgroundImage: `url(${images[0].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        ></div>
      </Link>

      <div className="p-4">
        <Link to={`/details/${id}`} className="cursor-pointer">
          <div className="py-2">
            <div className="flex items-center justify-start">
              <h4 className="text-xl font-bold">{name}</h4>
              <span className="flex pl-2">
                {[...Array(stars)].map((comp, i) => (
                  <AiFillStar key={i} color="orange"></AiFillStar>
                ))}
              </span>
            </div>
            <p className="font-thin italic">
              {address}, <span>{address2}</span>
            </p>
          </div>
        </Link>
        <div className="py-2 font-thin">
          <p className="pb-2 font-medium tracking-wide">Available Rooms:</p>
          <div>
            {hotelFiltered?.length !== 0 ? (
              hotelFiltered?.map((room: Room) => (
                <div key={room.id} className="column flex">
                  <Link
                    to={`/details/:${id}/:${room.id}`}
                    key={room.id}
                    className="p-0.25 cursor-pointer hover:font-medium hover:text-icon-primary"
                  >
                    {room.name}
                  </Link>
                </div>
              ))
            ) : (
              <p>No rooms matching children and/or adults criteria</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
