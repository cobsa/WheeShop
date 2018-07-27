import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BasketLogo from "../../assets/shopping-cart.svg";
import "./BasketWidgetComponent.css";

export default class BasketWidgetComponent extends Component {
  render() {
    const { itemCount } = this.props;
    let text = `${itemCount} Items in cart`;
    if (itemCount === 0) {
      text = "No items in cart";
    }
    if (itemCount === 1) {
      text = "One item in cart";
    }
    if (itemCount > 99) {
      text = "99+ Items in cart";
    }
    return (
      <Link to="/cart">
        <div className="basket-widget-container">
          <div className="basket-widget-text">{text}</div>
          <div className="basket-widget-svg-container">
            <BasketLogo className="basket-widget-svg" />
          </div>
        </div>
      </Link>
    );
  }
}

BasketWidgetComponent.propTypes = {
  itemCount: PropTypes.number.isRequired
};
