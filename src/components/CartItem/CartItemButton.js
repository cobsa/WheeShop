import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CartItemButton.css";

export default class CartItemButton extends Component {
  render() {
    return (
      <button className="cart-controls-button" onClick={this.props.onClick}>
        {this.props.type}
      </button>
    );
  }
}

CartItemButton.propTypes = {
  type: PropTypes.oneOf(["-", "+"]),
  onClick: PropTypes.func.isRequired
};
