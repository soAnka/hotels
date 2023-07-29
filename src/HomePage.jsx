import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HotelErrorBd from "./Hotel";
import ErrorBoundary from "./ErrorBoundary";
import fetchHotels from "./customHooks/fetchHotels";
import FormFilters from "./FormFilters";

const ratingArr = [1, 2, 3, 4, 5];

const HomePage = () => {
  const [filters, setFilters] = useState({
    starRating: 1,
    numAdults: 1,
    numChildren: 0,
  });
  const { isLoading, data } = useQuery(["hotelsData"], fetchHotels);

  const handleSubmit = (formData) => {
    setFilters(formData);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <FormFilters
        handleSubmit={handleSubmit}
        updateFilters={setFilters}
        ratingArr={ratingArr}
      />
      <div>
        {data
          ?.filter((hotel) => +hotel.starRating >= filters.starRating)
          .map((hotel) => (
            <HotelErrorBd
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              images={hotel.images}
              numberAdults={filters.numAdults}
              numberChildren={filters.numChildren}
            />
          ))}
      </div>
    </div>
  );
};

function HomePageErrorBd() {
  return (
    <ErrorBoundary errorMessage={<h4> Something went wrong.</h4>}>
      <HomePage />
    </ErrorBoundary>
  );
}

export default HomePageErrorBd;
