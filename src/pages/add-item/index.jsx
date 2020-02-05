import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import "./style.css";
import { withRouter } from "react-router-dom";

class AddItem extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = ({ target: { name, value } }) => {
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleSubmit = () => {
    const id = this.props.match.params.id;
    const { title, description } = this.state;
    this.props.postItem({
      item: {
        title,
        description
      },
      id
    });
    this.props.history.push(`/restaurant/${id}`);
  };

  render() {
    const { title, description } = this.state;

    return (
      <div className="add-item mt-105 animated fadeIn">
        <div className="w-100 flex flex-center">
          <Typography variant="h3">Add Item</Typography>

          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter Title"
              className="w-20"
              label="Title"
              id="title"
              name="title"
              value={title}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Press shift + enter for new line"
              multiline
              className="w-20"
              label="Description"
              id="description"
              name="description"
              value={description}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-10 w-100 flex flex-center">
            <Button
              variant="outlined"
              color="primary"
              className="w-20"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postItem: value => dispatch({ type: "POST_RESTAURANT_ITEM", value })
  };
};

export default connect(null, mapDispatchToProps)(withRouter(AddItem));
