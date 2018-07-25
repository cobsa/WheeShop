import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import BasketWidgetComponent from "../components/BasketWidget/BasketWidgetComponent";

storiesOf("BasketWidget", module).add("No items", () => (
  <BasketWidgetComponent text="No items in basket" />
));
