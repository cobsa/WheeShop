import React, { Component } from "react";
import { connect } from "react-redux";
import { intersectionWith } from "lodash";

import mergeByKey from "../helpers/mergeByKey";
import { actionCreators } from "../redux/cart";
import CartItem from "../components/CartItem/CartItem";

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    products: state.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (id, count) => {
      dispatch(actionCreators.addItem(id, count));
    },
    removeItem: (id, count) => {
      dispatch(actionCreators.removeItem(id, count));
    }
  };
};

class CartComponent extends Component {
  render() {
    const { cartItems, products } = this.props;
    const productsInBasket = mergeByKey(cartItems, products);
    const CartItems = productsInBasket.map(product => {
      return (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          addItem={e => this.props.addItem(product.id, 1)}
          removeItem={e => this.props.removeItem(product.id, 1)}
        />
      );
    });
    return <div>{CartItems}</div>;
  }
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export default Cart;
