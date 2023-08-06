import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { hotelsApi } from "./store/apiSlice";
import { useState } from "react";
import HotelDetails from "./components/HotelDetails";
import RoomDetails from "./components/RoomDetails";
import { FormDataType } from "./components/FormFilters";

const App = () => {
  const [hotels, setHotels] = useState<null>(null);
  const [filters, setFilters] = useState<FormDataType>({
    starRating: 1,
    numAdults: 0,
    numChildren: 0,
  });

  const handleSubmit = (formData: FormDataType) => {
    setFilters(formData);
    console.log(formData);
  };

  return (
    <BrowserRouter>
      <ApiProvider api={hotelsApi}>
        <h2>Hotels</h2>
        <Routes>
          <Route
            path="/"
            element={<HomePage handleSubmit={handleSubmit} filters={filters} />}
          />
          <Route
            path="/details/:id"
            element={<HotelDetails filters={filters} />}
          />
          {/* <Route path="/details/:id/:roomId" element={<RoomDetails />} /> */}
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
};

const rootApp = document.getElementById("app");

if (!rootApp) {
  throw new Error("No root App");
}
const container = createRoot(rootApp);
container.render(<App />);

export default App;
