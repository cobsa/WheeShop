import React, { Component } from "react";
import PropTypes from "prop-types";

import BaseItem from "../BaseItem/BaseItem";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

/* 
  Wrapper for Listings page. Contains button to add item in cart.
*/


export default class ListItem extends Component {
  render() {
    const { name, description, price } = this.props;
    return (
      <BaseItem name={name} description={description} price={price}>
        <AddToCartButton onClick={this.props.addItem} />
      </BaseItem>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired
};
