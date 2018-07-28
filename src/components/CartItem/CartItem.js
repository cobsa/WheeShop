import React, { Component } from "react";
import PropTypes from "prop-types";

import ShapeSolver from "../ShapeSolver/ShapeSolver";
import CartItemButton from "./CartItemButton";
import CartItemTextField from "./CartItemTextField";

import "./CartItem.css";

export default class CartItem extends Component {
  render() {
    const { name, id, count, price } = this.props;
    return (
      <div className="cart-item-container">
        <ShapeSolver shape={name} />
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">{price} €</div>
        <div className="cart-item-controls">
          <CartItemButton type="+" onClick={this.props.addItem} />
          <CartItemTextField value={count} />
          <CartItemButton type="-" onClick={this.props.removeItem} />
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};
