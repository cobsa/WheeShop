import React, { Component } from "react";
import { connect } from "react-redux";

import mergeByKey from "../helpers/mergeByKey";
import { actionCreators } from "../redux/cart";
import CartItem from "../components/CartItem/CartItem";
import NoItems from "../components/NoItems/NoItems";
import TotalPrice from "../components/TotalPrice/TotalPrice";

import "./Cart.css";

/* 
  Cart-page container.
*/

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
    },
    setItemCount: (id, count) => {
      dispatch(actionCreators.setItemCount(id, count));
    }
  };
};

class CartComponent extends Component {
  constructor() {
    super();
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(id, value) {
    // Check that value is valid number
    const validRegex = new RegExp(/[0-9]/g);
    if (validRegex.test(value) && typeof value === "number") {
      console.log(typeof value);
      this.props.setItemCount(id, value);
    }
  }
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
            description={product.description}
            addItem={e => this.props.addItem(product.id, 1)}
            removeItem={e => this.props.removeItem(product.id, 1)}
            onValueChange={e =>
              this.handleValueChange(product.id, parseInt(e.target.value, 10))
            }
          />
        );
      });

      // Calculate total price

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
