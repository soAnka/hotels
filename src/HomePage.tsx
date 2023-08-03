import { useEffect, useState } from "react";
import FormFilters, { FormDataType } from "./FormFilters";
import { IHotel } from "./APIResponsesInterface";
import Hotel from "./Hotel";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllHotels } from "./store/hotelsSlice";
import { AppDispatch } from "./store/store";
import { RootState } from "./store/store";
import { fetchHotelRooms } from "./store/roomsSlice";

const ratingArr = [1, 2, 3, 4, 5];

const HomePage = () => {
  const [filters, setFilters] = useState<FormDataType>({
    starRating: 1,
    numAdults: 1,
    numChildren: 0,
  });
  const dispatch = useDispatch<AppDispatch>();
  const { hotels } = useSelector((state: RootState) => state.hotels);
  const { loading, rooms } = useSelector((state: RootState) => state.rooms);

  useEffect(() => {
    dispatch(fetchAllHotels()).then((data) =>
      data.payload.map((d: IHotel) => {
        dispatch(fetchHotelRooms(d.id));
      })
    );
  }, []);

  const handleSubmit = (formData: FormDataType) => {
    setFilters(formData);
  };

  return (
    <>
      <div className="relative m-0 h-full w-screen border-4">
        <div className="m-0 h-[25rem] w-full bg-slate-300 text-left text-black">
          <div className={` m-0 h-full w-full`}>
            <div className="flex h-full w-full flex-col justify-center  p-8 pl-16 lg:w-3/5 2xl:w-2/5">
              <h4 className="p-4 text-6xl">Best Hotels This Week!</h4>
              <p className="w-3/4 p-4 text-base font-thin text-slate-500">
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <FormFilters handleSubmit={handleSubmit} ratingArr={ratingArr} />
        <div>
          {hotels && rooms && (
            <div className="grid grid-cols-1 gap-2 p-20 pt-36 sm:grid-cols-1 md:grid-cols-2 ">
              {hotels
                .filter(
                  (hotel: IHotel) => +hotel.starRating >= filters.starRating
                )
                .map((hotel: IHotel) => {
                  return (
                    <Hotel
                      key={hotel.id}
                      id={hotel.id}
                      name={hotel.name}
                      hotelRooms={rooms}
                      address={hotel.address1}
                      address2={hotel.address2}
                      images={hotel.images}
                      stars={+hotel.starRating}
                      loading={loading}
                      numberAdults={filters.numAdults}
                      numberChildren={filters.numChildren}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
