import React, { Component } from "react";
class Text extends Component {
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
        <input
          type="number"
          className="form-control"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Text;
