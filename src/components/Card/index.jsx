import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

const CardC = ({ title = "Test", image = "", restaurant = {}, id }) => {
  return (
    <Card style={{ maxWidth: 250 }}>
      <CardActionArea component={Link} to={`/restaurant/${id}`}>
        <CardMedia
          style={{ height: 140 }}
          image={
            restaurant.logoPath.path || "https://via.placeholder.com/200x200"
          }
          title={title}
        />
        <CardContent>
          <Typography variant="subtitle1" component="h2">
            {restaurant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardC;
