import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { hotelsApi } from "./store/apiSlice";
import { useState } from "react";
import HotelDetails from "./components/Hotel/HotelDetails";
import { FormDataType } from "./components/FormFilters";
import HomePageErrorB from "./components/HomePage";

const App = () => {
  const [filters, setFilters] = useState<FormDataType>({
    starRating: 1,
    numAdults: 0,
    numChildren: 0,
  });

  const handleSubmit = (formData: FormDataType) => {
    setFilters(formData);
  };

  return (
    <BrowserRouter>
      <ApiProvider api={hotelsApi}>
        <div className="fixed top-5 left-5 z-10">
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePageErrorB handleSubmit={handleSubmit} filters={filters} />
            }
          />
          <Route
            path="/details/:id"
            element={<HotelDetails filters={filters} />}
          />
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
