import React, { Component } from "react";
class Select extends Component {
  state = {
    value: this.props.value
  };

  onChange = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    return (
      <div>
        <select className="form-control" onChange={this.onChange}>
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    );
  }
}

export default Select;
