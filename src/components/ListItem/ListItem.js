import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ListItem.css";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ShapeSolver from "../ShapeSolver/ShapeSolver";

export default class ListItem extends Component {
  render() {
    const { name, description, price } = this.props;
    return (
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
          <AddToCartButton
            onClick={e => this.props.handleAddItem(this.props.id, 1)}
          />
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddItem: PropTypes.func.isRequired
};
