import React from "react";
import Header from "./Header/header";
import SideBar from "./Drawer/sideBar";
import { Outlet } from "react-router";

export default function MainLayout() {
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
