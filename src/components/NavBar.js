import React from "react";

import BasketWidget from "./BasketWidget/BasketWidget";
import "./NavBar.css";

export default () => {
  return (
    <div className="nav-container">
      <div className="Logo">
        whee <small>The most definitive shape store in the world</small>
      </div>
      <nav className="navigation">
        <BasketWidget />
      </nav>
    </div>
  );
};
