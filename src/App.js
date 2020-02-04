import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// pages
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Restaurant from "./pages/restaurant";
import AddRestaurant from "./pages/add-restaurant";
import EditRestaurant from "./pages/edit-restaurant";
import Item from "./pages/item";
import AddItem from "./pages/add-item";
import EditItem from "./pages/edit-item";

// components
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import storage from "./services/localStorage.service";

import "react-toastify/dist/ReactToastify.css";

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

  componentDidMount() {
    const { authenticate, fetchRestaurants } = this.props;
    fetchRestaurants();
    const token = storage.getKey("token");

    if (token) authenticate();
  }

  render() {
    return (
      <div className="App">
        <AppBar toggleDrawer={this.toggleDrawer} />
        <Drawer side={this.state.left} toggleDrawer={this.toggleDrawer} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/about" exact component={About} />
          <Route path="/restaurant/:id" exact component={Restaurant} />
          <Route path="/restaurant/:id/edit" exact component={EditRestaurant} />
          <Route path="/restaurant/:id/item/:item" exact component={Item} />
          <Route path="/restaurant/:id/add-item" exact component={AddItem} />
          <Route
            path="/restaurant/:id/item/:item/edit"
            exact
            component={EditItem}
          />

          {/* authenticated routes */}
          <Route path="/add-restaurant" exact component={AddRestaurant} />

          <Route path="/not-found" exact component={NotFound} />
          <Redirect from="*" to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch({ type: "FETCH_RESTAURANTS" }),
    authenticate: () => dispatch({ type: "IS_AUTHENTICATED" })
  };
};

export default connect(null, mapDispatchToProps)(App);
