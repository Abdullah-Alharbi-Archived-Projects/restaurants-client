import React from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import "./style.css";

const SignUp = () => {
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className="h-100 text-white input-inc"
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
              />
            </div>
            <div className="mt-15">
              <TextField
                id="Password"
                label="Password"
                type="Password"
                variant="outlined"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mt-15 ">
              <Button className="w-100" variant="contained" color="primary">
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
        <Typography variant="h2">Welcome Back</Typography>
        <Typography variant="h4" className="text-center text-blue">
          Review Restaurants
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUp;
