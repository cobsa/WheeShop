import React from "react";
import Navbar from "./NavBar";

import "./Layout.css";

export default props => {
  return (
    <div className="site-container">
      <Navbar />
      <div className="content-container">{props.children}</div>
    </div>
  );
};
