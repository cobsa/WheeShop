import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { MemoryRouter } from "react-router";

import BasketWidgetComponent from "../components/BasketWidget/BasketWidgetComponent";
import ListItem from "../components/ListItem/ListItem";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import CartItem from "../components/CartItem/CartItem";
import CartItemButton from "../components/CartItem/CartItemButton";
import CartItemTextField from "../components/CartItem/CartItemTextField";

storiesOf("BasketWidget", module).add("No items", () => (
  <MemoryRouter>
    <BasketWidgetComponent itemCount={0} />
  </MemoryRouter>
));

storiesOf("BasketWidget", module).add("1 item in basket", () => (
  <MemoryRouter>
    <BasketWidgetComponent itemCount={1} />
  </MemoryRouter>
));

storiesOf("BasketWidget", module).add("Multiple items in basket", () => (
  <MemoryRouter>
    <BasketWidgetComponent itemCount={14} />
  </MemoryRouter>
));

storiesOf("BasketWidget", module).add("Too many items in basket", () => (
  <MemoryRouter>
    <BasketWidgetComponent itemCount={100} />
  </MemoryRouter>
));

storiesOf("ListItem", module).add("Circle", () => (
  <ListItem
    name="Circle"
    description="Perfect choice when you don’t need any corners."
    price={999}
  />
));
storiesOf("ListItem", module).add("Rectangle", () => (
  <ListItem
    name="Rectangle"
    description="For once, it’s a great idea to think inside the box."
    price={766}
  />
));
storiesOf("ListItem", module).add("Triangle", () => (
  <ListItem
    name="Triangle"
    description="A true classic with three elegant corners."
    price={1099}
  />
));
storiesOf("ListItem", module).add("All", () => {
  return (
    <div>
      <ListItem
        name="Circle"
        description="Perfect choice when you don’t need any corners."
        price={999}
      />
      <ListItem
        name="Rectangle"
        description="For once, it’s a great idea to think inside the box."
        price={766}
      />{" "}
      <ListItem
        name="Triangle"
        description="A true classic with three elegant corners."
        price={1099}
      />
    </div>
  );
});

storiesOf("Buttons", module).add("Add to cart", () => <AddToCartButton />);

storiesOf("CartItem", module).add("Default item", () => (
  <CartItem
    id={1}
    name="Rectangle"
    count={2}
    price={999}
    addItem={action}
    removeItem={action}
  />
));
storiesOf("CartItem", module).add("+ Button", () => (
  <CartItemButton type="+" onClick={action} />
));
storiesOf("CartItem", module).add("- Button", () => (
  <CartItemButton type="-" onClick={action} />
));
storiesOf("CartItem", module).add("TextField", () => (
  <CartItemTextField value={23} onChange={action} />
));
