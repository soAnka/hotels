import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./HotelDetails";
import HomePage from "./HomePage";
import RoomDetails from "./RoomDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <h2>Hotels</h2>
        <Routes>
          <Route path="/details/:id" element={<HotelDetails />} />
          <Route path="/details/:id/:roomId" element={<RoomDetails />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Provider>
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
