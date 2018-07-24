import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import Layout from "./components/Layout";
import Basket from "./pages/Basket";
import Listing from "./pages/Listing";

import store from "./redux/createStore";

const browserHistory = createHistory();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Route path="/" exact component={Listing} />
          <Route path="/basket" component={Basket} />
        </Layout>
      </Router>
    </Provider>
  );
};
