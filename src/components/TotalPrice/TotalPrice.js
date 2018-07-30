import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TotalPrice.css";

/* 
  Displays total price of items in cart.
*/

export default class TotalPrice extends Component {
  render() {
    return (
      <div className="total-price">
        <h2>Your total</h2>
        {this.props.price} € + Shipping
      </div>
    );
  }
}

TotalPrice.propTypes = {
  price: PropTypes.number.isRequired
};
