import "./styles/App.css";
import "./styles/Heading.css";
import "./styles/Main.css";
import "./styles/Nav.css";
import "./styles/Footer.css";

import React, { Component } from "react";
import Heading from "./components/Heading";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router className="main">
          <Articles path="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
