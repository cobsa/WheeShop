import React from "react";
import Navbar from "./NavBar";

import "./Layout.css";

/* 
  Layout structure and styles.
*/

export default props => {
  return (
    <div className="site-container">
      <Navbar />
      <div className="content-container">{props.children}</div>
    </div>
  );
};
