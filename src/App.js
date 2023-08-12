import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

import { ContextProvider } from "./context/contextProvider.js";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <RouterProvider router={Routes} />
      </div>
    </ContextProvider>
  );
}

export default App;
