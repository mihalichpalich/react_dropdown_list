import React from "react";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.createListData = this.createListData.bind(this);
    this.createButton = this.createButton.bind(this);
    this.createHidden = this.createHidden.bind(this);
  }

  createButton = (item) => {
    return <button className='accordion'>{item}</button>
  }

  createHidden = (item) => {
    return <div className='panel'>{item}</div>
  }

  createListData = (data) => {
    for (let [key, value] of Object.entries(data)) {
      if (value && typeof(value) == "object") {
        console.log(key, value);
        this.createButton(key);
        this.createListData(value);
      } else {
        this.createHidden(key);
        console.log(key);
      }
    }
  }

  render() {
    return <div>{this.createListData(this.state.data)}</div>
  }
}

export default DropdownList;