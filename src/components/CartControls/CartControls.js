import React, { Component } from "react";
import PropTypes from "prop-types";

import CartItemButton from "./CartItemButton";
import CartItemTextField from "./CartItemTextField";

import "./CartControls.css";

/* 
  Wrapper for different controls for adding/removing items in basket
*/

export default class CartControls extends Component {
  render() {
    return (
      <div>
        <div className="cart-controls">
          <CartItemButton type="+" onClick={this.props.addItem} />
          <CartItemTextField
            value={this.props.count}
            onChange={this.props.onValueChange}
          />
          <CartItemButton type="-" onClick={this.props.removeItem} />
        </div>
      </div>
    );
  }
}

CartControls.propTypes = {
  count: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};
