import React, { Component } from "react";
import BasketWidgetComponent from "./BasketWidgetComponent";

export default class BasketWidget extends Component {
  render() {
    return <BasketWidgetComponent itemCount={0} />;
  }
}
