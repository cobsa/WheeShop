import React, { Component } from "react";
import ProptTypes from "prop-types";

import BasketLogo from "../../assets/shopping-cart.svg";
import "./BasketWidgetComponent.css";

export default class BasketWidgetComponent extends Component {
  render() {
    const { itemCount } = this.props;
    let text = "Multiple items in cart";
    if (itemCount === 0) {
      text = "No items in cart";
    }
    if (itemCount === 1) {
      text = "One item in cart";
    }
    return (
      <div className="basket-widget-container">
        <div className="basket-widget-text">{text}</div>
        <div className="basket-widget-svg-container">
          <BasketLogo className="basket-widget-svg" />
        </div>
      </div>
    );
  }
}

BasketWidgetComponent.propTypes = {
  itemCount: ProptTypes.number.isRequired
};
