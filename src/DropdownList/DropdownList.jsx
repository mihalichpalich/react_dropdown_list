import React from "react";
import $ from "jquery";
import data from "../menuItems.json";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectItemsNumber: Object.keys(data).length
    };
  }

  render() {
    return this.state.objectItemsNumber;
  }
}

export default DropdownList;
