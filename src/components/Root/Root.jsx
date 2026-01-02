import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <hr />
      <div className="root-main">
        <SideBar></SideBar>
        {isNavigation && <span>Loadinggg.........</span>}
        <Outlet></Outlet>
      </div>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Root;
