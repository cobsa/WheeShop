import cartReducer from "./cart";
import { actionCreators, initialState } from "./cart";

test("Should return initial state ", () => {
  expect(cartReducer(initialState)).toEqual(initialState);
});

test("Should add item and add more of the same item", () => {
  const addTwoItemsAction = actionCreators.addItem(12, 2);
  let mockState;
  mockState = cartReducer(undefined, addTwoItemsAction);
  expect(mockState).toEqual({
    cartItems: [
      {
        id: 12,
        count: 2
      }
    ]
  });
  mockState = cartReducer(mockState, addTwoItemsAction);
  expect(mockState).toEqual({
    cartItems: [
      {
        id: 12,
        count: 4
      }
    ]
  });
});

test("Should add item and an other item", () => {
  const first = actionCreators.addItem(31, 5);
  const second = actionCreators.addItem(2, 14);
  let mockState = cartReducer(undefined, first);
  mockState = cartReducer(mockState, second);
  expect(mockState).toEqual({
    cartItems: [{ id: 31, count: 5 }, { id: 2, count: 14 }]
  });
});

test("Should add item and then remove it", () => {
  const add = actionCreators.addItem(2, 4);
  const remove = actionCreators.removeItem(2, 2);
  let mockState = cartReducer(undefined, add);
  expect(mockState).toEqual({ cartItems: [{ id: 2, count: 4 }] });
  mockState = cartReducer(mockState, remove);
  expect(mockState).toEqual({
    cartItems: [{ id: 2, count: 2 }]
  });
  mockState = cartReducer(mockState, remove);
});

test("Should add to items and remove one of them", () => {
  const addFirst = actionCreators.addItem(1, 5);
  const addSecond = actionCreators.addItem(2, 10);
  const removeFirst = actionCreators.removeItem(1, 5);
  const removeSecond = actionCreators.removeItem(2, 20);
  let mockState;
  mockState = cartReducer(undefined, addFirst);
  mockState = cartReducer(mockState, addSecond);
  mockState = cartReducer(mockState, removeFirst);
  expect(mockState).toEqual({
    cartItems: [
      {
        id: 2,
        count: 10
      }
    ]
  });
  mockState = cartReducer(mockState, removeSecond);
  expect(mockState).toEqual({ cartItems: [] });
});

test("Should add item and then change it's value", () => {
  const add = actionCreators.addItem(258, 1);
  const modify = actionCreators.setItemCount(258, 36);
  let mockState = cartReducer(undefined, add);
  mockState = cartReducer(mockState, modify);
  expect(mockState).toEqual({
    cartItems: [
      {
        id: 258,
        count: 36
      }
    ]
  });
});

test("Should return same state", () => {
  const add = actionCreators.addItem(35, 1);
  const modifyElse = actionCreators.setItemCount(23, 45);
  let mockState = cartReducer(undefined, add);
  mockState = cartReducer(mockState, modifyElse);
  expect(mockState).toEqual({
    cartItems: [
      {
        id: 35,
        count: 1
      }
    ]
  });
});

test("Should remove items with negative count", () => {
  const add = actionCreators.addItem(2, 1);
  const modifyNegative = actionCreators.setItemCount(2, -58);
  let mockState = cartReducer(undefined, add);
  mockState = cartReducer(mockState, modifyNegative);
  expect(mockState).toEqual({ cartItems: [] });
});
