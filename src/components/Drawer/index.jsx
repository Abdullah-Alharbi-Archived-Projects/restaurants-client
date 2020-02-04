import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

const DrawerC = ({ side, toggleDrawer, authenticated }) => {
  return (
    <Drawer open={side} onClose={toggleDrawer("left", false)}>
      <div
        role="presentation"
        onClick={toggleDrawer("left", false)}
        onKeyDown={toggleDrawer("left", false)}
      >
        <List style={{ width: 350 }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {authenticated && (
            <React.Fragment>
              <Divider />
              <ListItem button component={Link} to="/add-restaurant">
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Restaurant" />
              </ListItem>
            </React.Fragment>
          )}
          <Divider />
          <ListItem button component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, null)(DrawerC);
