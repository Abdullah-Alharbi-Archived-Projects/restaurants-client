import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./style.css";

const About = () => {
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className="animated fadeIn about-page"
    >
      <div className=" bg-megaman text-white p-3 radius-5">
        <Typography variant="h2">About</Typography>
        <hr />
        <p style={{ marginTop: 15 }}>
          <h3>
            Developer: <strong>Abdullah Hamad Alharbi</strong>
          </h3>
        </p>
        <p>
          this is a clone of yelp users are able to create restaurants, add menu
          items
        </p>
        <hr style={{ marginBottom: 25, marginTop: 25 }} />
        <h4>Technologies I Used to Build this app</h4>
        <ul className="ml-25">
          <li>React</li>
          <li>Material UI</li>
          <li>Redux</li>
          <li>Redux Saga middleware for redux</li>
          <li>Toastify for notifications</li>
        </ul>
      </div>
    </Grid>
  );
};

export default About;
