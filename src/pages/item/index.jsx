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

  let images = [];
  if (item) {
    if (item.images.length > 0) images = item.images.map(image => image.path);
    else {
      for (let i = 0; i < 5; i++) {
        images.push("https://via.placeholder.com/500x500");
      }
    }
  }

  return (
    <div className="item-page w-100 mt-105 animated fadeIn">
      <Container>
        {item ? (
          <div>
            <TopInfo
              image={
                item.images[0]
                  ? item.images[0].path
                  : "https://via.placeholder.com/200x200"
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
        {item.images && (
          <AliceCarousel mouseTrackingEnabled responsive={{ 0: { items: 3 } }}>
            {item
              ? images.map(image => (
                  <React.Fragment>
                    <img
                      src={image}
                      onDragStart={handleOnDragStart}
                      className="five"
                      alt="smth"
                    />
                    <p>{image._id}</p>
                  </React.Fragment>
                ))
              : null}
          </AliceCarousel>
        )}
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
