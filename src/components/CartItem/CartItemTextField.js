import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CartItemTextField.css";

export default class CartItemTextField extends Component {
  render() {
    return (
      <div>
        <input
          value={this.props.value}
          type="number"
          className="cart-item-text-field"
          minLength={0}
          maxLength={3}
          onChange={this.props.onChange}
          min={0}
        />
      </div>
    );
  }
}

CartItemTextField.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
