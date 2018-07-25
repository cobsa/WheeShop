import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import BasketWidgetComponent from "../components/BasketWidget/BasketWidgetComponent";

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

