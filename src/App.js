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
import Error from "./components/Error";

class App extends Component {
  state = {
    username: 'jessjelly'
  }
  render() {
    return (
      <div className="App">
        <Heading username={this.state.username} />
        <Nav />
        <Router className="router">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticlePage path="articles/:article_id" username={this.state.username} />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
