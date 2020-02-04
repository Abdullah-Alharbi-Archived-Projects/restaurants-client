import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.css";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    const state = { ...this.state };

    state[name] = value;

    this.setState(state);
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { signIn, history } = this.props;

    signIn({
      email,
      password
    });

    history.push("/");
  };

  render() {
    return (
      <Grid
        container
        alignContent="center"
        justify="center"
        className="sign-in-page animated fadeIn h-100 text-white input-inc"
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
          <h1>Sign In</h1>
          <div className="mt-15">
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="mt-15">
                <TextField
                  id="Password"
                  label="Password"
                  type="Password"
                  variant="outlined"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="mt-15 ">
                <Button
                  className="w-100"
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Sign in
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
              backgroundImage: `url('https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
            }}
          ></div>
          <Typography variant="h2" className="text-center">
            Welcome Back
          </Typography>
          <Typography variant="h4" className="text-center text-blue">
            Review Restaurants
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToState = dispatch => {
  return {
    signIn: value => dispatch({ type: "SET_USER", value })
  };
};

export default connect(null, mapDispatchToState)(withRouter(SignIn));
