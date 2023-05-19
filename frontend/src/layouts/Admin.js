import React from "react";
import { Outlet } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbar/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Header/HeaderStats.js";
import FooterAdmin from "../components/Footer/FooterAdmin";
import SidebarHelper from "../util/helpers/Sidebar/SidebarHelper";

export default function Admin() {
  return (
    <>
      <Sidebar title="Wisteria" sections={SidebarHelper.getSidebar()} />
      <div className="relative md:ml-64 bg-blueGray-100">
         <AdminNavbar /> 
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
