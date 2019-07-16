import React, { Component } from "react";
import "../styles/Sort.css";

class Sort extends Component {
  render() {
    return (
      <div className="sortBy">
        <section className="intro">
          {" "}
          <h2>
            Welcome to NC News, the place to read the latest news and have your
            say on the current issues.
            <br /> <br />View articles, post your comments and cast your votes
            on our content.
          </h2>
        </section>
        <section className="box">
          <p>Sort by:</p>
          <button id="created_at asc" onClick={this.props.handleClick}>
            Most Recent
          </button>

          <button id="created_at desc" onClick={this.props.handleClick}>
            Last First
          </button>
          <button id="comment_count asc" onClick={this.props.handleClick}>
            Most Commented
          </button>

          <button id="comment_count desc" onClick={this.props.handleClick}>
            Least Commented
          </button>

          <button id="votes asc" onClick={this.props.handleClick}>
            Top Voted
          </button>

          <button id="votes desc" onClick={this.props.handleClick}>
            Least Voted
          </button>
        </section>
      </div>
    );
  }
}

export default Sort;
