import "./styles/App.css";
import "./styles/Heading.css";
import "./styles/Main.css";
import "./styles/Nav.css";
import "./styles/Footer.css";
import "./styles/ArticleCard.css";

import React, { Component } from "react";
import Heading from "./components/Heading";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticlePage path="articles/:article_id" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
