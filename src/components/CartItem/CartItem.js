import React, { Component } from "react";
import PropTypes from "prop-types";

import BaseItem from "../BaseItem/BaseItem";
import CartControls from "../CartControls/CartControls";


/* 
  Wrapper for Cart-page. Displays item info and render buttons for controlling item count.
*/

export default class CartItem extends Component {
  render() {
    const { name, description, price, count } = this.props;
    return (
      <div>
        <BaseItem name={name} description={description} price={price}>
          <CartControls
            count={count}
            addItem={this.props.addItem}
            removeItem={this.props.removeItem}
            onValueChange={this.props.onValueChange}
          />
        </BaseItem>
      </div>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};
