import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact">Contact us</label>
            <textarea
              className="form-control"
              id="contact"
              rows="3"
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        <Prompt
          when={this.state.value.length > 0}
          message="Are you sure you want to leave this page without sending a message?"
        />
      </>
    );
  }
}

export default Contact;
