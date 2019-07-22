import React, { Component } from "react";
import "../styles/Sort.css";
import PropTypes from "prop-types";

class Sort extends Component {
  state = {
    sort: "created_at asc"
  };
  render() {
    return (
      <div className="sortBy">
        <section className="intro">
          <h2>
            Welcome to NC News, the place to read the latest news and have your
            say on the current issues.
            <br /> <br />
            View articles, post your comments and cast your votes on our
            content.
          </h2>
        </section>

        <section className="dropDownNav">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            onChange={event => {
              const { value } = event.target;
              this.setState({ sort: value }, () => {
                this.props.handleClick(this.state.sort);
              });
            }}
            value={this.state.sort}
          >
            <option value="created_at asc">Most Recent</option>
            <option value="created_at desc">Last First</option>
            <option value="comment_count asc">Most Commented</option>
            <option value="comment_count desc">Least Commented</option>
            <option value="votes asc">Top Voted</option>
            <option value="votes desc">Least Voted</option>
          </select>
        </section>

        <section className="box">
          <p>Sort by:</p>
          <button
            id="created_at asc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Most Recent
          </button>
          <button
            id="created_at desc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Last First
          </button>
          <button
            id="comment_count asc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Most Commented
          </button>

          <button
            id="comment_count desc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Least Commented
          </button>

          <button
            id="votes desc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Top Voted
          </button>

          <button
            id="votes asc"
            onClick={event => {
              this.props.handleClick(event.target.id);
            }}
          >
            Least Voted
          </button>
        </section>
      </div>
    );
  }
}

Sort.propTypes = {
  handleClick: PropTypes.func
};

export default Sort;
