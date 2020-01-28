import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Drawer from "@material-ui/core/Drawer";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import FilledInput from "@material-ui/core/FilledInput";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FilledInput,
  Divider
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

class App extends Component {
  state = {
    restaurants: [...Array(21).keys()],
    left: false
  };

  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  render() {
    return (
      <div className="App">
        {/* background div */}
        <div className="bg-main"></div>

        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              style={{ marginRight: 25 }}
              color="inherit"
              aria-label="menu"
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Restaurants
            </Typography>
            <Button color="inherit">Sign in</Button>
            <Button color="inherit">Sign up</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            role="presentation"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <List style={{ width: 350 }}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        {/* header - search */}

        <header className="main">
          <Typography variant="h2" component="h1" align="center">
            Send Your Feedback to Restaurants <br />
            <span id="add-restaurant">Add Restaurants</span>
          </Typography>
          <div className="search-input">
            {/* need to add search icon */}
            <FilledInput placeholder="Search ..." />
          </div>
        </header>

        {/* all restaurants */}
        {/* TODO: if user is signed in show add restaurant button */}

        <div className="restaurants">
          {this.state.restaurants.map(restaurant => {
            return (
              <div className="restaurant co-overlay">
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* footer */}
        <footer>
          <h3>Copyrights 2020 &copy;</h3>
        </footer>
      </div>
    );
  }
}

export default App;
