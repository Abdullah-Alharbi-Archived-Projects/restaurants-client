import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import http from "../../services/http.service";
import "./style.css";

class EditItem extends Component {
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
    const { id, item } = this.props.match.params;
    const { title, description } = this.state;
    this.props.updateItem({
      item,
      id,
      data: {
        title,
        description
      }
    });
    this.props.history.push(`/restaurant/${id}/item/${item}`);
  };

  async componentDidMount() {
    const { id, item } = this.props.match.params;
    const data = await http.get(`restaurants`, `${id}/menu/${item}`);
    const state = { ...this.state };

    state.title = data.title;
    state.description = data.description;

    this.setState(state);
  }

  render() {
    // const { id, item } = this.props.match.params;

    const { title, description } = this.state;

    return (
      <div className="add-item mt-105 animated fadeIn">
        <div className="w-100 flex flex-center">
          <Typography variant="h3">Edit Item</Typography>

          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter Title"
              className="w-20"
              autoComplete="off"
              label="Title"
              id="title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Press shift + enter for new line"
              multiline
              className="w-20"
              autoComplete="off"
              label="Description"
              id="description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-10 w-100 flex flex-center">
            <Button
              variant="outlined"
              color="primary"
              className="w-20"
              onClick={this.handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateItem: value => dispatch({ type: "UPDATE_RESTAURANT_ITEM", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditItem));
