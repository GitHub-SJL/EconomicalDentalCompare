import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import ThemeCustomization from "./themes";

import { ContextProvider } from "./context/contextProvider.js";

function App() {
  return (
    <ThemeCustomization>
      <ContextProvider>
        <div className="App">
          <RouterProvider router={Routes} />
        </div>
      </ContextProvider>
    </ThemeCustomization>
  );
}

export default App;
