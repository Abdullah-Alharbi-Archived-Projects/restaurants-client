import React from "react";
import {
  Container,
  Grid,
  CircularProgress,
  Typography,
  Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TopInfo from "../../components/top-info";
import AliceCarousel from "react-alice-carousel";

import "./style.css";
import "react-alice-carousel/lib/alice-carousel.css";

const Restaurants = ({
  histroy,
  match,
  restaurants,
  destroyRestaurnt,
  authenticated,
  destroyItem,
  ...props
}) => {
  const handleOnDragStart = e => e.preventDefault();
  const id = match.params.id;
  const restaurant = restaurants.filter(r => r._id === id)[0];

  const handleClick = e => {
    e.preventDefault();
    destroyRestaurnt(id);
    props.history.push("/");
  };

  let owner = null;
  if (authenticated) {
    if (restaurant) {
      if (restaurant.user == props.userId) owner = true;
      else if (restaurant.user._id === props.userId) owner = true;
      else owner = false;
    } else owner = false;
  } else owner = false;

  // const isOwner = authenticated ? props.userId === restaurant.user._id : false;

  let images = [];
  if (restaurant) {
    if (restaurant.images.length > 0) images = restaurant.images;
    else {
      for (let i = 0; i < 5; i++) {
        images.push("https://via.placeholder.com/500x500");
      }
    }
  }

  return (
    <div className="restaurant-page w-100 mt-105 animated fadeIn">
      <Container>
        {restaurant ? (
          <div>
            <TopInfo
              image={
                restaurant.logoPath
                  ? restaurant.logoPath.path
                  : "https://via.placeholder.com/200x200"
              }
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sint
        placeat natus, beatae modi animi, unde dolore culpa harum, consectetur
        explicabo? Hic repudiandae totam eaque aspernatur ut nesciunt deleniti
        numquam?"
              title={restaurant.name}
              isOwner={owner}
              component={() => (
                <React.Fragment>
                  <Button
                    component={Link}
                    variant="outlined"
                    className="w-100"
                    color="primary"
                    to={`/restaurant/${id}/add-item`}
                  >
                    Add item
                  </Button>
                  <div className="mt-25 mb-25"></div>
                  <Button
                    component={Link}
                    variant="outlined"
                    className="w-100"
                    to={`/restaurant/${id}/edit`}
                  >
                    Edit
                  </Button>
                  <div className="mt-25 mb-25"></div>

                  <Button
                    onClick={handleClick}
                    color="secondary"
                    className="w-100"
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </React.Fragment>
              )}
            />
            {/* {authenticated && (
              <React.Fragment>
                <Button component={Link} to={`/restaurant/${id}/add-item`}>
                  Add item
                </Button>
                <Button component={Link} to={`/restaurant/${id}/edit`}>
                  Edit
                </Button>
                <Button onClick={handleClick}>Delete</Button>
              </React.Fragment>
            )} */}
          </div>
        ) : (
          <CircularProgress />
        )}
      </Container>

      <Grid container justify="center" alignItems="center" className="mt-20">
        <AliceCarousel mouseTrackingEnabled responsive={{ 0: { items: 3 } }}>
          {restaurant ? (
            images.map(image => (
              <React.Fragment>
                <img
                  src={image.path ? image.path : image}
                  onDragStart={handleOnDragStart}
                  className="five"
                  alt="smth"
                />
                {image && <p>{image._id}</p>}
                {}
              </React.Fragment>
            ))
          ) : (
            <CircularProgress />
          )}
        </AliceCarousel>
        <hr style={{ width: "80%" }} />
      </Grid>

      {restaurant && restaurant.menu ? (
        <Container>
          {restaurant.menu.map(item => (
            <div key={item._id}>
              <TopInfo
                image={
                  item.images[0]
                    ? item.images[0].path
                    : "https://via.placeholder.com/200x200"
                }
                description={item.description}
                title={item.title}
                variant="h4"
                isOwner={
                  authenticated ? props.userId === restaurant.user._id : false
                }
                component={() => (
                  <React.Fragment>
                    <div className="mt-25 mb-25"></div>
                    <Button
                      component={Link}
                      variant="outlined"
                      className="w-100"
                      to={`/restaurant/${id}/item/${item._id}/edit`}
                    >
                      Edit
                    </Button>
                    <div className="mt-25 mb-25"></div>

                    <Button
                      onClick={() => destroyItem({ id, item: item._id })}
                      color="secondary"
                      className="w-100"
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </React.Fragment>
                )}
              />
              <Button
                component={Link}
                variant="outlined"
                // className="w-100"
                color="primary"
                to={`/restaurant/${id}/item/${item._id}`}
              >
                Visit
              </Button>
            </div>
          ))}
        </Container>
      ) : (
        <Typography variant="h5" className="text-center">
          No Items yet.
        </Typography>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
    authenticated: state.user.authenticated,
    userId: state.user._id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyRestaurnt: value => dispatch({ type: "DESTROY_RESTAURANT", value }),
    destroyItem: value => dispatch({ type: "DETSROY_RESTAURANT_ITEM", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Restaurants));
