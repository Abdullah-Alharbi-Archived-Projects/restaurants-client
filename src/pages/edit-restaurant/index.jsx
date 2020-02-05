import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { get } from "../../services/http.service";
import { connect } from "react-redux";
import "./style.css";

class EditRestaurant extends Component {
  state = {
    name: "",
    address: {
      street: "",
      city: ""
    }
  };

  handleChangeName = ({ target: { name, value } }) => {
    const state = { ...this.state };
    state.name = value;
    this.setState(state);
  };

  handleChangeAddressCity = ({ target: { name, value } }) => {
    const state = { ...this.state };
    state.address.city = value;
    this.setState(state);
  };

  handleChangeAddressStreet = ({ target: { name, value } }) => {
    const state = { ...this.state };
    state.address.street = value;
    this.setState(state);
  };

  handleSubmit = () => {
    const { name, address } = this.state;
    const id = this.props.match.params.id;

    this.props.updateRestaurant({
      data: {
        name,
        address
      },
      id
    });
    this.setState({ name, address });
    this.props.history.push(`/restaurant/${id}/`);
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const data = await get("restaurants", id);
    const state = { ...this.state };

    state.name = data.name;
    state.address.city = data.address.city;
    state.address.street = data.address.street || "";

    this.setState(state);
  }

  render() {
    const {
      name,
      address: { city, street }
    } = this.state;

    return (
      <div className="add-restaurant-page mt-105 w-100 animated fadeIn">
        <div className="w-100 flex flex-center">
          <Typography variant="h3">Edit Restaurant</Typography>
          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter Name"
              className="w-20"
              autoComplete="off"
              label="Name"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChangeName}
            />
          </div>

          <div className="mb-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter City"
              className="w-20"
              autoComplete="off"
              label="City"
              id="city"
              name="address[city]"
              value={city}
              onChange={this.handleChangeAddressCity}
            />
          </div>
          <div className="mb-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter Street"
              className="w-20"
              autoComplete="off"
              label="Street"
              id="street"
              name="address[street]"
              value={street}
              onChange={this.handleChangeAddressStreet}
            />
          </div>
          <div className="mb-10 w-100 flex flex-center">
            <Button
              variant="outlined"
              color="secondary"
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

const mapDispatchToProps = dispatch => {
  return {
    updateRestaurant: value => dispatch({ type: "UPDATE_RESTAURANT", value })
  };
};

export default connect(null, mapDispatchToProps)(withRouter(EditRestaurant));
