import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HotelDetails from "./HotelDetails";

const App = () => {
  return (
    <BrowserRouter>
      <h2>Hotels</h2>
      <Routes>
        <Route path="/details/:id" element={<HotelDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);

export default App;
