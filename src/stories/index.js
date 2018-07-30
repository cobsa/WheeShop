import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { MemoryRouter } from "react-router";

import BasketWidgetComponent from "../components/BasketWidget/BasketWidgetComponent";
import ListItem from "../components/ListItem/ListItem";
import CartItem from "../components/CartItem/CartItem";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import CartControls from "../components/CartControls/CartControls";

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
    addItem={action}
  />
));
storiesOf("ListItem", module).add("Rectangle", () => (
  <ListItem
    name="Rectangle"
    description="For once, it’s a great idea to think inside the box."
    price={766}
    addItem={action}
  />
));
storiesOf("ListItem", module).add("Triangle", () => (
  <ListItem
    name="Triangle"
    description="A true classic with three elegant corners."
    price={1099}
    addItem={action}
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

storiesOf("CartItem", module).add("Circle", () => (
  <CartItem
    name="Circle"
    description="Perfect choice when you don’t need any corners."
    price={999}
    count={2}
    addItem={action}
    removeItem={action}
    onValueChange={action}
  />
));

storiesOf("Buttons", module).add("Add to cart", () => <AddToCartButton />);

storiesOf("Cart-controls", module).add("Cart controls", () => (
  <CartControls
    addItem={action}
    removeItem={action}
    onValueChange={action}
    count={2}
  />
));
