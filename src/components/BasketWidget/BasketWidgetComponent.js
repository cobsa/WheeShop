import React from "react";

import basketLogo from "../../assets/shopping-cart.svg";
import "./BasketWidgetComponent.css";

export default (props) => {
  return (
    <div className="basket-widget-container">
      <div className="basket-widget-text">{props.text}</div>
      <img src={basketLogo} alt="Basket" className="basket-svg" />
    </div>
  );
};
