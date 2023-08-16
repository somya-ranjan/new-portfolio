import React from "react";
import NavBar from "../../view/navBar/NavBar";
import BottomNav from "../../view/navBar/bottomNav/BottomNav";
import { Outlet } from "react-router-dom";

function MainLayouts() {
  return (
    <>
      <NavBar />
      <Outlet />
      <BottomNav />
    </>
  );
}

export default MainLayouts;
