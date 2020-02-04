import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.css";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    const state = { ...this.state };

    state[name] = value;

    this.setState(state);
  };

  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;
    const { signUp, history } = this.props;

    signUp({
      firstName,
      lastName,
      email,
      password
    });

    // TODO: show notification
    history.push("/sign-in");
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <Grid
        container
        alignContent="center"
        justify="center"
        className="sign-up-page animated fadeIn h-100 text-white input-inc"
      >
        <Grid
          container
          item
          direction="column"
          xs={6}
          sm={4}
          md={4}
          alignContent="center"
          justify="center"
          className="h-100 bg-dark box-left"
        >
          <h1>Sign Up</h1>
          <div className="mt-15">
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  id="firstName"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  onChange={this.handleChange}
                  value={firstName}
                />
              </div>
              <div className="mt-15">
                <TextField
                  id="lastName"
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  onChange={this.handleChange}
                  value={lastName}
                />
              </div>
              <div className="mt-15">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  onChange={this.handleChange}
                  value={email}
                />
              </div>
              <div className="mt-15">
                <TextField
                  id="Password"
                  label="Password"
                  type="Password"
                  name="password"
                  variant="outlined"
                  placeholder="Enter Your Password"
                  onChange={this.handleChange}
                  value={password}
                />
              </div>
              <div className="mt-15 ">
                <Button
                  className="w-100"
                  variant="contained"
                  color="secondary"
                  onClick={this.handleSubmit}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid
          container
          item
          xs={6}
          sm={8}
          direction="column"
          alignContent="center"
          justify="center"
          md={8}
          className="h-100 relative"
        >
          <div
            className="bg-img"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
            }}
          ></div>
          <Typography variant="h2" className="text-center">
            Welcome Guest
          </Typography>
          <Typography variant="h4" className="text-center text-blue">
            Help Us Review Restaurants
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: value => dispatch({ type: "SIGN_UP_USER", value })
  };
};

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
