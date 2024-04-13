
import React, { Suspense, useState, useEffect } from "react";
//Importing Section
// const TopBar = import("../CommonLayout/TopBar");
import NavBar from "../CommonLayout/Navbar";
import Footer from "../CommonLayout/Footer";

const Layout = (props) => {
  const userId = localStorage.getItem("userId");

  return (
    <React.Fragment>
      <Suspense>
        <div>
          <NavBar />
          <div className="main-content">
            <div className="page-content">{props.children}</div>
            <Footer />
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Layout;
