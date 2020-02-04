import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import "./style.css";

const NotFound = () => {
  return (
    <div className="not-found-page animated fadeIn mt-105 text-center">
      <Typography variant="h3">It seems like you were lost</Typography>
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/">
        Back
      </Button>
    </div>
  );
};

export default NotFound;
