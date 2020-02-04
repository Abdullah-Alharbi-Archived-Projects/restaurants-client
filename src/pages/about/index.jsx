import React from "react";
import { Grid, Typography } from "@material-ui/core";

const About = () => {
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className="animated fadeIn"
    >
      <div className="mt-25 bg-megaman text-white p-3 radius-5">
        <Typography variant="h2">About</Typography>
        <hr />
        <p style={{ marginTop: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex soluta{" "}
          <br />
          odit nam ipsam! Nostrum asperiores veniam illum temporibus, tempore{" "}
          <br />
          dolorum quis exercitationem, deserunt consequuntur ad expedita, <br />
          delectus perferendis dolor consectetur! <br />
        </p>
      </div>
    </Grid>
  );
};

export default About;
