import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import ProductReducer from "./products";
import CartReducer from "./cart";

export const history = createHistory();

const middlewares = [thunk];

// Only log in development
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer
});

// Add the reducer to your store on the `routing` key
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(...middlewares))
);

export default store;
