import { Link } from "react-router-dom";
import { Image, Room } from "../../typesAndInterfaces/APIResponsesInterface";
import { AiFillStar } from "react-icons/ai";
import { useGetRoomsQuery } from "../../store/apiSlice";
import RoomCard from "../Room/RoomCard";
import Spinner from "../Spinner";

interface HotelProps {
  id: string;
  name: string;
  address: string;
  address2: string;
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

  const filtered = data?.rooms?.filter(
    (room: Room) =>
      room.occupancy.maxChildren >= numberChildren &&
      room.occupancy.maxAdults >= numberAdults
  );
  return (
    <div
      key={id}
      className="min-h-80 m-1 flex h-96 max-h-full w-full items-start justify-start rounded-lg border bg-white text-sm shadow-lg shadow-slate-200"
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
        <Link to={`/details/${id}`} className="cursor-pointe">
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
          {data?.rooms && (
            <div>
              {filtered?.length !== 0 ? (
                <div>
                  {filtered.map((room: Room) => (
                    <div key={room.id} className="column flex">
                      <RoomCard key={room.id} room={room}>
                        {room.name}
                      </RoomCard>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No rooms matching children and/or adults criteria</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
