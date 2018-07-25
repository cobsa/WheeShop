import React, { Component } from "react";
import BasketWidgetComponent from "./BasketWidgetComponent";

export default class BasketWidget extends Component {
  render() {
    return <BasketWidgetComponent text="No items in cart" />;
  }
}
