import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./NoItems.css";

export default class NoItems extends Component {
  render() {
    return (
      <div className="no-items">
        You don't have any shapes in cart. <Link to="/">Go find some.</Link>
      </div>
    );
  }
}
