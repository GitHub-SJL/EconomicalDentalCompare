import React, { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import Index from "./routes/index.jsx";
import SignUp from "./routes/sign-up.jsx";
import SignIn from "./routes/sign-in.jsx";

import { ContextProvider } from "./context/contextProvider.js";

function App() {
  const [token, setToken] = useState(null);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />
        <Route path="join" element={<SignUp />}></Route>
        <Route path="login" element={<SignIn />}></Route>
      </Route>
    )
  );

  return (
    <ContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ContextProvider>
  );
}

export default App;
