import React, { Component } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import "./AddToCartButton.css";

/* 
  Add to cart button implementation.
*/

export default class AddToCartButton extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicked: true });
    this.props.onClick();
  }
  render() {
    return (
      <button onClick={this.handleClick} className="add-to-cart-button">
        <Transition
          timeout={1000}
          in={this.state.clicked}
          onEntered={e =>
            this.setState({
              clicked: false
            })
          }
        >
          {state => {
            switch (state) {
              case "entering":
                return "ITEM ADDED";
              case "entered":
                return "ITEM ADDED";
              case "exiting":
                return "ITEM ADDED";
              case "exited":
                return "ADD TO CART";
              default:
                return "ADD TO CART";
            }
          }}
        </Transition>
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
