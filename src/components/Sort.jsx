import React, { Component } from "react";
import "../styles/Sort.css";

class Sort extends Component {
  render() {
    return (
      <div className="sortBy">
        <section className="box">
          Sort by:
          <span id="created_at asc" onClick={this.props.handleClick}>
            Most Recent /
          </span>
          <span id="created_at desc" onClick={this.props.handleClick}>
            Last First /
          </span>
          <span id="comment_count asc" onClick={this.props.handleClick}>
            Most Commented /
          </span>
          <span id="comment_count desc" onClick={this.props.handleClick}>
            Least Commented /
          </span>
          <span id="votes asc" onClick={this.props.handleClick}>
            / Top Voted
          </span>
          <span id="votes desc" onClick={this.props.handleClick}>
            Least Voted
          </span>
        </section>
      </div>
    );
  }
}

export default Sort;
