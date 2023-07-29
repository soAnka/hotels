import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelDetails from "./HotelDetails";
import HomePageErrorBd from "./HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <h2>Hotels</h2>
        <Routes>
          <Route path="/details/:id" element={<HotelDetails />} />
          <Route path="/" element={<HomePageErrorBd />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);

export default App;
