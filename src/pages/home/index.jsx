import React, { Component } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Grid from "../../components/Grid";

import { connect } from "react-redux";
import "./style.css";

class Home extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div className="home-page animated fadeIn">
        <Background />
        <Header />

        <div className="restaurants">
          <Grid restaurants={restaurants} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

export default connect(mapStateToProps, null)(Home);
