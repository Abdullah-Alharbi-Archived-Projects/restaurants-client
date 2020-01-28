import React, { Component } from "react";

class App extends Component {
  state = {
    restaurants: [...Array(21).keys()]
  };

  render() {
    return (
      <div className="App">
        {/* background div */}
        <div className="bg-main"></div>

        {/* navbar */}
        <nav className="navbar">
          <ul className="right">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
          </ul>
          <ul className="left">
            {/* TODO: need to check if the user is signed in */}
            <li>
              <a href="#!">Sign in</a>
            </li>
            <li>
              <a href="#!">Sign up</a>
            </li>
          </ul>
        </nav>
        {/* header - search */}

        <header className="main">
          <h1>Lorem Ipsume.....</h1>
          <div className="search-input">
            {/* need to add search icon */}
            <input placeholder="Search ..." />
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
