import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import { Route } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
