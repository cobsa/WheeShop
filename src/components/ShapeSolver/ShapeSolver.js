import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ShapeSolver.css";

// Import all the shapes
import Circle from "../../assets/shapes/circle.svg";
import Square from "../../assets/shapes/square.svg";
import Triangle from "../../assets/shapes/triangle.svg";

export default class ShapeSolver extends Component {
  render() {
    const { shape } = this.props;
    if (shape === "Circle") {
      return <Circle />;
    }
    if (shape === "Square") {
      return <Square />;
    }
    if (shape === "Triangle") {
      return <Triangle />;
    }
    return null;
  }
}

ShapeSolver.propTypes = {
  shape: PropTypes.string.isRequired
};
