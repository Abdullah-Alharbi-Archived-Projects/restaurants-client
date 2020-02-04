import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

const Navbar = ({ user, toggleDrawer, signOut, history }) => {
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          style={{ marginRight: 25 }}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Restaurants
        </Typography>
        {!user.authenticated && (
          <React.Fragment>
            <Button color="inherit" component={Link} to="/sign-in">
              Sign in
            </Button>
            <Button color="inherit" component={Link} to="/sign-up">
              Sign up
            </Button>
          </React.Fragment>
        )}
        {user.authenticated && (
          <React.Fragment>
            <Typography variant="subtitle1" className="capitalize">
              Welcome, {user.firstName} {user.lastName}
            </Typography>
            <Button color="inherit" onClick={handleSignOut}>
              Sign out
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({ type: "DESTROY_USER" })
  };
};

const mapStateToProps = state => {
  return {
    user: { ...state.user }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
