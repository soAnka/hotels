import { FormDataType } from "./FormFilters";
import { IHotel } from "../typesAndInterfaces/APIResponsesInterface";
import Hotel from "./Hotel";
import { useGetAllHotelsQuery } from "../store/apiSlice";
import FormFilters from "./FormFilters";

const ratingArr = [1, 2, 3, 4, 5];

interface HomePageProps {
  handleSubmit: (formData: FormDataType) => void;
  filters: FormDataType;
}

const HomePage = ({ handleSubmit, filters }: HomePageProps) => {
  const { data } = useGetAllHotelsQuery("OBMNG");

  return (
    <>
      <div className="relative m-0 h-full w-screen">
        <div className="m-0 h-[25rem] w-full bg-[url('../assets/main_banner.jpg')] bg-cover bg-center bg-no-repeat text-left text-black">
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
          {data && (
            <div className="grid grid-cols-1 gap-2 p-20 pt-36 sm:grid-cols-1 md:grid-cols-2 ">
              {data
                .filter(
                  (hotel: IHotel) => +hotel.starRating >= filters.starRating
                )
                .map((hotel: IHotel) => {
                  return (
                    <Hotel
                      key={hotel.id}
                      id={hotel.id}
                      name={hotel.name}
                      address={hotel.address1}
                      address2={hotel.address2}
                      images={hotel.images}
                      stars={+hotel.starRating}
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
