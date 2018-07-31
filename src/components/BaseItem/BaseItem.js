import React, { Component } from "react";
import PropTypes from "prop-types";

import ShapeSolver from "../ShapeSolver/ShapeSolver";

import "./BaseItem.css";

/* 
  Default base component for list items.
*/


export default class BaseItem extends Component {
  render() {
    const { name, description, price } = this.props;
    return (
      <div>
        <div className="list-item-container">
          <div className="list-item-svg">
            <ShapeSolver shape={name} />
          </div>

          <div className="divider">
            <div className="list-item-name">{name}</div>
            <div className="list-item-description">{description}</div>
          </div>
          <div className="price-button-divider">
            <div className="list-item-price">{price} €</div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

BaseItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
