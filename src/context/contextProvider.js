import React, { useState, createContext, useContext } from "react";

const Context = createContext({
  loggedUser: {
    id: null,
    email: "",
    token: "",
  },
  loggedIn: false,
  setLoggedUser: () => {},
  setLoggedIn: () => {},
});

const ContextProvider = ({ children }) => {
  const setLoggedUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      loggedUser: {
        id: data.id,
        email: data.email,
        token: data.token,
      },
    }));
  };

  const setLoggedIn = (status) => {
    setState((prevState) => ({
      ...prevState,
      loggedIn: status,
    }));
  };

  const initialState = {
    loggedUser: {
      id: null,
      email: "",
      token: "",
    },
    loggedIn: false,
    setLoggedUser,
    setLoggedIn,
  };

  const [state, setState] = useState(initialState);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
