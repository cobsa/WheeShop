import React, { Component } from "react";

import ListItem from "../components/ListItem/ListItem";

export default class Listing extends Component {
  render() {
    return (
      <div>
        <ListItem
          name="Square"
          description="Perfect choice when you don’t need any corners."
          price={766}
        />
        <ListItem
          name="Square"
          description="Perfect choice when you don’t need any corners."
          price={766}
        />
        <ListItem
          name="Square"
          description="Perfect choice when you don’t need any corners."
          price={766}
        />
      </div>
    );
  }
}
