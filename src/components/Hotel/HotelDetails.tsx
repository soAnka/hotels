import { useParams } from "react-router-dom";
import PhotosGallery from "./PhotosGallery";
import { useGetAllHotelsQuery, useGetRoomsQuery } from "../../store/apiSlice";
import { IHotel } from "../../typesAndInterfaces/APIResponsesInterface";
import { FormDataType } from "../FormFilters";
import Spinner from "../Spinner";
import HotelInfo from "./HotelInfo";
import AvailableRooms from "../Room/AvailableRooms";

interface HotelDetailsProps {
  filters: FormDataType;
}
const HotelDetails = ({ filters }: HotelDetailsProps) => {
  const { hotelId } = useParams();
  const { data, error, isLoading } = useGetAllHotelsQuery("OBMNG");
  const hotel = data?.find((hotelData: IHotel) => hotelData.id === hotelId);
  const {
    starRating,
    images,
    id,
    name,
    address1,
    address2,
    town,
    description,
  } = hotel;
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

  return (
    <div className="md:px-8 md:py-8 lg:px-20 lg:py-10">
      <div
        key={id}
        className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 md:gap-5 "
      >
        <div className="h-full p-4">
          <PhotosGallery images={images} />
        </div>
        <div className="hotel_info--details p-4">
          <HotelInfo
            starRating={starRating}
            name={name}
            address1={address1}
            address2={address2}
            town={town}
            description={description}
          />
          <div className="available_rooms font-medium tracking-wide">
            <h3 className="mt-8 w-full border-y-2 border-black p-4">
              Available rooms
            </h3>
            <div className="available_rooms_container">
              {rooms?.rooms && (
                <AvailableRooms
                  rooms={rooms.rooms}
                  numberChildren={filters.numChildren}
                  numberAdults={filters.numAdults}
                  type="cardItem"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
