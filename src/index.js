import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import store from "./store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);
