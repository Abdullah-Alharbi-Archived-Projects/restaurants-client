import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class AddRestaurant extends Component {
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

  push = () => {
    this.props.history.push("/");
  };

  handleSubmit = () => {
    const { name, address } = this.state;
    this.props.postRestaurant({
      restaurant: {
        name,
        address
      },
      push: this.push
    });
    this.setState({ name: "", address: { city: "", street: "" } });
  };

  render() {
    const {
      name,
      address: { city, street }
    } = this.state;
    return (
      <div className="add-restaurant-page mt-105 w-100 animated fadeIn">
        <div className="w-100 flex flex-center">
          <Typography variant="h3">Add Restaurant</Typography>

          <div className="mb-10 mt-10 w-100 flex flex-center">
            <TextField
              variant="outlined"
              placeholder="Enter Name"
              className="w-20"
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
              color="inherit"
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

const mapStateToProps = state => {
  return {
    change: state.restaurants.change
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postRestaurant: value => dispatch({ type: "POST_RESTAURANT", value }),
    handleChangeName: value =>
      dispatch({ type: "HANDLE_CHANGE_RESTAURANT_NAME", value }),
    handleChangeAddressStreet: value =>
      dispatch({ type: "HANDLE_CHANGE_RESTAURANT_ADDRESS_STREET", value }),
    handleChangeAddressCity: value =>
      dispatch({ type: "HANDLE_CHANGE_RESTAURANT_ADDRESS_CITY", value }),
    clearChange: () => dispatch({ type: "CLEAR_CHANGE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddRestaurant));
