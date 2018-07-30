import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ShapeSolver.css";

// Import all the shapes
import Circle from "../../assets/shapes/circle.svg";
import Square from "../../assets/shapes/square.svg";
import Triangle from "../../assets/shapes/triangle.svg";


/* 
  Displays correct shape. TODO: Implement smarter way to get shape from name. 
*/

export default class ShapeSolver extends Component {
  render() {
    const { shape } = this.props;
    if (shape === "Circle") {
      return <Circle className="resolved-svg" />;
    }
    if (shape === "Rectangle") {
      return <Square className="resolved-svg" />;
    }
    if (shape === "Triangle") {
      return <Triangle className="resolved-svg" />;
    }
    return null;
  }
}

ShapeSolver.propTypes = {
  shape: PropTypes.string.isRequired
};
