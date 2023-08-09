import React, { useContext } from "react";
import { Context } from "../context/contextProvider";
export default function Index() {
  const { loggedUser } = useContext(Context);
  console.log(loggedUser.id, loggedUser.email, loggedUser.token);
  
  
  return <div>home</div>;
}
