import React, { Component } from "react";
import PropTypes from "prop-types";

import BasketWidgetComponent from "./BasketWidgetComponent";

export default class BasketWidget extends Component {
  render() {
    let itemCount = 0;
    this.props.cartItems.forEach(item => {
      itemCount += item.count;
    });
    return <BasketWidgetComponent itemCount={itemCount} />;
  }
}

BasketWidget.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  )
};
