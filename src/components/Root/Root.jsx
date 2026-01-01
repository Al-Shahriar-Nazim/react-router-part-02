import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <hr />
      <div className="root-main">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Root;
