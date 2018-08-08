/**
 * @jest-environment jsdom
 */

import { shallow, mount } from "enzyme";
import React from "react";
import sinon from "sinon";

import { CartComponent } from "./Cart";
import CartItem from "../components/CartItem/CartItem";
import NoItems from "../components/NoItems/NoItems";
import Products from "../../config/products";

describe("<CartComponent/>", () => {
  let props;
  let spies;
  beforeEach(() => {
    spies = {
      addItem: sinon.spy(),
      removeItem: sinon.spy(),
      setItemCount: sinon.spy()
    };
    props = {
      cartItems: [
        {
          id: 1,
          count: 1
        },
        {
          id: 2,
          count: 1
        },
        {
          id: 3,
          count: 1
        }
      ],
      ...Products,
      ...spies
    };
  });

  it("Should render 3 <CartItems />", () => {
    const Cart = shallow(<CartComponent {...props} />);
    expect(Cart.find(CartItem).length).toEqual(3);
  });

  it("Should render <NoItems/>", () => {
    props.cartItems = [];
    const Cart = shallow(<CartComponent {...props} />);
    expect(Cart).toContainReact(<NoItems />);
  });

  it("Should change item count", () => {
    const Cart = mount(<CartComponent {...props} />);
    Cart.find(CartItem)
      .find("[id=2]")
      .instance()
      .props.onValueChange({
        target: {
          value: 43
        }
      });
    expect(spies.setItemCount.calledWith(2, 43)).toBeTruthy();
    Cart.unmount();
  });

  it("Should not change item count", () => {
    const Cart = shallow(<CartComponent {...props} />);
    Cart.instance().handleValueChange(1, "42");
    Cart.instance().handleValueChange(1, "dasdsa");
    Cart.instance().handleValueChange(1, 3.231);
    expect(spies.setItemCount.callCount).toEqual(0);
  });

  it("Should add one item to cart", () => {
    const Cart = mount(<CartComponent {...props} />);
    Cart.find(CartItem).find('[id=3]').instance().props.addItem()
    expect(spies.addItem.calledWith(3, 1)).toBeTruthy();
    Cart.unmount()
  })

  it("Should remove one item from cart", () => {
    const Cart = mount(<CartComponent {...props} />);
    Cart.find(CartItem).find('[id=2]').instance().props.removeItem()
    expect(spies.removeItem.calledWith(2, 1)).toBeTruthy();
    Cart.unmount()
  })
});
