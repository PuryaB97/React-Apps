import React from "react";

import "./topnav.css";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i class="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">{/* {dropsdown here} */}</div>
        <div className="topnav__right-item">{/* {dropsdown here} */}</div>
        <div className="topnav__right-item">{/* {dropsdown here} */}</div>
        <div className="topnav__right-item">{/* {dropsdown here} */}</div>
      </div>
    </div>
  );
};

export default TopNav;
