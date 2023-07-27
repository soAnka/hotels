import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

const App = () => {
  return <HomePage />;
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);

export default App;
