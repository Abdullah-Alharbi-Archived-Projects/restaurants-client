import React from "react";
import {
  Container,
  Grid,
  CircularProgress,
  // Typography,
  Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TopInfo from "../../components/top-info";
import AliceCarousel from "react-alice-carousel";

const Item = ({ match, restaurants, authenticated, ...props }) => {
  const handleOnDragStart = e => e.preventDefault();
  const id = match.params.id;
  const itemId = match.params.item;
  const restaurant = restaurants.filter(r => r._id === id)[0];

  const item = restaurant
    ? restaurant.menu.filter(item => item._id === itemId)[0]
    : false;

  const handleClick = () => {
    props.destroyItem({ id, item: itemId });
    props.history.push(`/restaurant/${id}`);
  };

  return (
    <div className="item-page w-100 mt-105 animated fadeIn">
      <Container>
        {item ? (
          <div>
            <TopInfo
              image={
                item.images[0].path || "https://via.placeholder.com/200x200"
              }
              description={item.description}
              title={item.title}
            />
            {authenticated && (
              <React.Fragment>
                <Button
                  component={Link}
                  to={`/restaurant/${id}/item/${itemId}/edit`}
                >
                  Edit
                </Button>
                <Button onClick={handleClick}>Delete</Button>
              </React.Fragment>
            )}
          </div>
        ) : (
          <CircularProgress />
        )}
      </Container>

      <Grid container justify="center" alignItems="center" className="mt-20">
        <AliceCarousel mouseTrackingEnabled responsive={{ 0: { items: 3 } }}>
          {item && item.images.length ? (
            item.images.map(image => (
              <img
                src={image.path}
                onDragStart={handleOnDragStart}
                className="five"
                alt="smth"
              />
            ))
          ) : (
            <CircularProgress />
          )}
          {/* <img
            src="https://via.placeholder.com/500x500"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="smth"
          />
          <img
            src="https://via.placeholder.com/500x500"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="smth"
          />
          <img
            src="https://via.placeholder.com/500x500"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="smth"
          /> */}
        </AliceCarousel>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
    authenticated: state.user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyItem: value => dispatch({ type: "DETSROY_RESTAURANT_ITEM", value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item));
