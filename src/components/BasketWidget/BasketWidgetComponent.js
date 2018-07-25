import React from "react";

import BasketLogo from "../../assets/shopping-cart.svg";
import "./BasketWidgetComponent.css";

export default props => {
  return (
    <div className="basket-widget-container">
      <div className="basket-widget-text">{props.text}</div>
      <BasketLogo className="basket-widget-svg"/>
    </div>
  );
};
