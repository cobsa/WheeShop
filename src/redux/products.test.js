import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

import * as products from "./products";
import productReducer from "./products";

test("Should return initial state", () => {
  expect(productReducer()).toEqual(products.initialState);
});

const mockProducts = [
  {
    id: 1,
    name: "Circle",
    description: "Perfect choice when you don’t need any corners.",
    price: 999
  },
  {
    id: 2,
    name: "Rectangle",
    description: "For once, it’s a great idea to think inside the box.",
    price: 899
  },
  {
    id: 3,
    name: "Triangle",
    description: "A true classic with three elegant corners.",
    price: 1009
  }
];

// Configure mock store

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("Should fetch products and create appropriate actions", () => {
    fetchMock.getOnce("api/products/", {
      body: { products: mockProducts },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: products.requestProductsType },
      {
        type: products.receiveProductsType,
        payload: {
          products: mockProducts
        }
      }
    ];

    const store = mockStore(products.initialState);
    /* Test action creators and then run actions trough reducer */
    return store
      .dispatch(products.actionCreators.requestProducts())
      .then(() => {
        const executedActions = store.getActions();
        expect(executedActions).toEqual(expectedActions);
        // Run all the executed actions trough the reducer
        let mockStoreState = products.initialState;
        executedActions.forEach(action => {
          mockStoreState = productReducer(mockStoreState, action);
        });
        expect(mockStoreState).toEqual({
          isLoading: false,
          products: mockProducts
        });
      });
  });
});
