import React from "react";
import { Grid, Container } from "@material-ui/core";
import Card from "../Card";
import "./style.css";

const GridC = ({ restaurants }) => {
  return (
    <Container fixed>
      <Grid container spacing={3} alignContent="center">
        {restaurants.map(restaurant => {
          return (
            <Grid
              key={restaurant._id ? restaurant._id : restaurant}
              item
              md={3}
              xs={12}
              sm={6}
              zeroMinWidth={true}
            >
              <Card
                id={restaurant._id ? restaurant._id : restaurant}
                restaurant={restaurant}
                title={restaurant.name}
                image={"https://via.placeholder.com/500x500"}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default GridC;
