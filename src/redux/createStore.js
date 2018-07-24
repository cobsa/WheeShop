import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer } from "react-router-redux";

const middlewares = [];

// Only log in development
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(...middlewares)
);

export default store;
