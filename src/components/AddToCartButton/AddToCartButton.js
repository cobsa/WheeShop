import React, { Component } from "react";
import PropTypes from "prop-types";

import "./AddToCartButton.css";

export default class AddToCartButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="add-to-cart-button">
        ADD TO CART
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
