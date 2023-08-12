import React from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Header />
      <SideBar />
      <div id="detail" style={{ marginLeft: 310, marginTop: 65 }}>
        <Outlet />
      </div>
    </>
  );
}
