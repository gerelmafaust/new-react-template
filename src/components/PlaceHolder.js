import React, { Component } from "react";
import { getItems } from "../services/placeHolderService";
import _ from "lodash";

class PlaceHolder extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const { data: items } = await getItems();
    console.log(items);
    this.setState({ items });
  }
  render() {
    return <div className="row">hi</div>;
  }
}

export default PlaceHolder;
