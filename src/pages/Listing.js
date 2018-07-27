import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ListItem from "../components/ListItem/ListItem";
import { actionCreators } from "../redux/products";

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToStore = dispatch => {
  return {
    requestProducts: () => {
      dispatch(actionCreators.requestProducts());
    }
  };
};

class ListingComponent extends Component {
  componentDidMount() {
    this.props.requestProducts();
  }
  render() {
    const { isLoading, products } = this.props.products;

    // TODO: implement loading screen
    if (isLoading || products.length === 0) {
      return null;
    }

    const ListItems = products.map(product => {
      return (
        <ListItem
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      );
    });

    return <div>{ListItems}</div>;
  }
}

ListingComponent.propTypes = {
  products: PropTypes.shape({
    isLoading: PropTypes.bool,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
      })
    )
  })
};

const Listing = connect(
  mapStateToProps,
  mapDispatchToStore
)(ListingComponent);

export default Listing;
