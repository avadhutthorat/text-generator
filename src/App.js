/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import axios from "axios";
import Output from "./Components/Output.js";
import "./App.css";
import Select from "./Components/Controls/Select";
import Text from "./Components/Controls/Text";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 2,
      format: "html",
      text: ""
    };
  }

  componentWillMount() {
    this.textGenerator();
  }

  textGenerator() {
    // axios
    //   .get(
    //     "http://hipsterjesus.com/api/?paras=" +
    //       this.state.paras +
    //       "&html=" +
    //       this.state.html
    //   )
    axios
      .get(
        "https://baconipsum.com/api/?type=all-meat&paras=" +
          this.state.paras +
          "&start-with-lorem=1&format=" +
          this.state.format
      )
      .then(response => {
        this.setState({ text: response.data });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  showHtml = x => {
    this.setState({ format: x }, () => {
      this.textGenerator();
    });
  };

  changeParamHandler = number => {
    this.setState({ paras: number }, () => {
      this.textGenerator();
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs : </label>
            <Text value={this.state.paras} onChange={this.changeParamHandler} />
          </div>
          <div className="form-group">
            <label>Include HTML : </label>
            {this.state.html}
            <Select value={this.state.html} onChange={this.showHtml} />
          </div>
        </form>
        <br />
        <br /> <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
