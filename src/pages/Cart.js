import React, { Component } from "react";
import { connect } from "react-redux";

import mergeByKey from "../helpers/mergeByKey";
import { actionCreators } from "../redux/cart";
import CartItem from "../components/CartItem/CartItem";
import NoItems from "../components/NoItems/NoItems";
import TotalPrice from "../components/TotalPrice/TotalPrice";

import "./Cart.css";

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
    let CartItems;
    let totalPrice = 0;
    if (cartItems.length !== 0) {
      // Only when there is some items in cart
      const productsInBasket = mergeByKey(cartItems, products);
      CartItems = productsInBasket.map(product => {
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
      // Calculate total cost

      productsInBasket.forEach(product => {
        totalPrice += product.price * product.count;
      });
    }

    return (
      <div className="cart-container">
        <h2 className="your-cart">Your cart</h2>
        {CartItems || <NoItems />}
        <TotalPrice price={totalPrice} />
      </div>
    );
  }
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export default Cart;
