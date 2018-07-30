import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BasketWidget from "./BasketWidget/BasketWidget";
import "./NavBar.css";

/* 
  Displays navbar. Also connects to store to get item count for BasketWidget.
*/

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
class NavBarComponent extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <Link to="/">
            <div className="logo">
              whee <small>The most definitive shape store in the world</small>
            </div>
          </Link>
          <nav className="navigation">
            <BasketWidget cartItems={this.props.cartItems} />
          </nav>
        </div>
        <div className="zig-zag" />
      </div>
    );
  }
}

NavBarComponent.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  )
};

const NavBar = connect(mapStateToProps)(NavBarComponent);

export default NavBar;
