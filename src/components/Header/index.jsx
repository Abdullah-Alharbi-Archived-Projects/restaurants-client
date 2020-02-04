import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.css";

const Header = ({ restaurants, history }) => {
  const get = data => {
    // console.log("pressed", data);
    history.push(`/restaurant/${data._id}`);
    // console.log(data);
  };
  return (
    <header className="main">
      <Typography
        variant="h2"
        component="h1"
        color="textPrimary"
        align="center"
      >
        Send Your Feedback to Restaurants <br />
        <span id="add-restaurant">Add Restaurants</span>
      </Typography>
      <div className="search-input">
        {/* <TextField label="Search" variant="outlined" /> */}
        <Autocomplete
          options={restaurants}
          getOptionLabel={option => option.name}
          // getOptionSelected={value => get(value)}
          noOptionsText="Not Found."
          // onClick={() => console.log("tooo")}
          selectOnFocus={true}
          onChange={(e, i) => get(i)}
          size="small"
          renderInput={params => (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};
export default connect(mapStateToProps, null)(withRouter(Header));
