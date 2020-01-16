import React from "react";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const createListData = (data) => {
      Object.keys(data).map(item => {
          if (data[item]) {
            console.log(item, data[item]);
            return <button className='accordion'>{item}</button>
            createListData(data[item])
          } else {
            return <div className='panel'>{item}</div>
          }
        }
      )
    }

    return <div>{createListData(this.state.data)}</div>
  }
}

export default DropdownList;