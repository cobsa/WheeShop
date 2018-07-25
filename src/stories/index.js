import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import BasketWidgetComponent from "../components/BasketWidget/BasketWidgetComponent";
import ListItem from "../components/ListItem/ListItem";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";

storiesOf("BasketWidget", module).add("No items", () => (
  <BasketWidgetComponent itemCount={0} />
));

storiesOf("BasketWidget", module).add("1 item in basket", () => (
  <BasketWidgetComponent itemCount={1} />
));

storiesOf("BasketWidget", module).add("Multiple items in basket", () => (
  <BasketWidgetComponent itemCount={15} />
));

storiesOf("BasketWidget", module).add("Too many items in basket", () => (
  <BasketWidgetComponent itemCount={154} />
));

storiesOf("ListItem", module).add("Circle", () => (
  <ListItem
    name="Circle"
    description="Perfect choice when you don’t need any corners."
    price={999}
  />
));

storiesOf("Buttons", module).add("Add to cart", () => <AddToCartButton />);
