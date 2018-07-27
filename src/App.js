import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Listing from "./pages/Listing";

import store, {history} from "./redux/createStore";
import "./App.css";


// Create an enhanced history that syncs navigation events with the store

export default () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Route path="/" exact component={Listing} />
          <Route path="/cart" component={Cart} />
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
};
