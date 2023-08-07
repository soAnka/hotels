import { FormDataType } from "./FormFilters";
import { IHotel } from "../typesAndInterfaces/APIResponsesInterface";
import Hotel from "./Hotel/Hotel";
import { useGetAllHotelsQuery } from "../store/apiSlice";
import FormFilters from "./FormFilters";
import Banner from "./Banner";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "./Spinner";

const ratingArr = [1, 2, 3, 4, 5];

interface HomePageProps {
  handleSubmit: (formData: FormDataType) => void;
  filters: FormDataType;
}

const HomePage = ({ handleSubmit, filters }: HomePageProps) => {
  const { data, error, isLoading } = useGetAllHotelsQuery("OBMNG");

  if (error) {
    throw new Error("Error");
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="relative m-0 h-full w-screen">
        <Banner
          title="Find your hotel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        />
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

function HomePageErrorB(props: HomePageProps) {
  return (
    <ErrorBoundary errorMessage={<h4>Something went wrong.</h4>}>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}

export default HomePageErrorB;
