import { useParams } from "react-router-dom";
import PhotosGallery from "./PhotosGallery";
import { AiFillStar } from "react-icons/ai";
import { useGetAllHotelsQuery, useGetRoomsQuery } from "../../store/apiSlice";
import { IHotel, Room } from "../../typesAndInterfaces/APIResponsesInterface";
import { FormDataType } from "../FormFilters";
import { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";
import RoomCard from "../Room/RoomCard";
import Spinner from "../Spinner";

interface HotelDetailsProps {
  filters: FormDataType;
}
const HotelDetails = ({ filters }: HotelDetailsProps) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllHotelsQuery("OBMNG");
  const hotel = data?.find((h: IHotel) => h.id === id);
  const {
    data: rooms,
    error: errorRoom,
    isLoading: isLoadingRoom,
  } = useGetRoomsQuery(id);

  if (error || errorRoom) {
    throw new Error("Error");
  }

  if (isLoading || isLoadingRoom) {
    return <Spinner />;
  }

  useEffect(() => {}, [filters]);

  const filtered = rooms?.rooms?.filter(
    (room: Room) =>
      room.occupancy.maxChildren >= filters.numChildren &&
      room.occupancy.maxAdults >= filters.numAdults
  );

  return (
    <div className="md:px-10 md:py-10 lg:px-20 lg:py-10">
      <div
        key={hotel.id}
        className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 md:gap-5 "
      >
        <div className="h-full p-4">
          <PhotosGallery images={hotel.images} />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-start">
            <h4 className="font-serif text-2xl font-bold">{hotel.name}</h4>
            <span className="flex pl-2">
              {[...Array(+hotel.starRating)].map((comp, i) => (
                <AiFillStar key={i} color="orange"></AiFillStar>
              ))}
            </span>
          </div>
          <p className="font-thin italic text-slate-700">
            {hotel.address1}, {hotel.address2}, {hotel.town}
          </p>
          <p className="mt-4 mb-4 font-light text-slate-700">
            {hotel.description}
          </p>
          <div className="available_rooms font-medium tracking-wide">
            <h3 className="mt-8 w-full border-y-2 border-black p-4">
              Available rooms
            </h3>
            <div>
              {rooms?.rooms && (
                <div className="p-4 font-light text-slate-700">
                  {filtered?.filter(
                    (room: Room) =>
                      room.occupancy.maxChildren >= filters.numChildren &&
                      room.occupancy.maxAdults >= filters.numAdults
                  ).length !== 0 ? (
                    filtered && (
                      <div className="grid w-full grid-cols-2 gap-1">
                        {filtered.map((room: Room) => {
                          return (
                            <RoomCard key={room.id} room={room}>
                              <div className="column justify-star flex w-full items-center border border-slate-800 p-2">
                                <div>
                                  <p className="mb-2 text-sm font-medium">
                                    {room.name}
                                  </p>
                                  <div className="flex items-center">
                                    <div className="mr-3 flex items-center">
                                      <FaBabyCarriage size={14} />
                                      <p className="ml-1 text-xs font-bold">
                                        {room.occupancy.maxChildren}
                                      </p>
                                    </div>
                                    <div className="flex items-center">
                                      <BsFillPersonFill size={16} />
                                      <p className="ml-1 text-xs font-bold">
                                        {room.occupancy.maxAdults}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </RoomCard>
                          );
                        })}
                      </div>
                    )
                  ) : (
                    <p>No rooms matching children and/or adults criteria</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
