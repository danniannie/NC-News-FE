import React, { Component } from "react";
import "../styles/Votes.css";
import * as api from "../utils/api";
import PropTypes from "prop-types";

class Votes extends Component {
  state = {
    voteChange: 0,
    err: null
  };
  render() {
    const { votes } = this.props;
    return (
      <div className="voteContainer"><div className="votes" data-cy='votes'>
        Votes: {votes + this.state.voteChange}
        <br />
        <button
          onClick={() => {
            this.vote(1);
          }}
          disabled={this.state.voteChange === 1}
        >
          +
        </button>
        <button
          onClick={() => {
            this.vote(-1);
          }}
          disabled={this.state.voteChange === -1}
        >
          -
        </button>
      </div></div>

    );
  }

  vote = increment => {
    const { id, section } = this.props;

    api
      .votes(id, increment, section)
      .then(response => { })
      .catch(err => {
        this.setState(state => ({
          voteChange: state.voteChange - increment
        }));
      });

    this.setState(state => ({
      voteChange: state.voteChange + increment
    }));
  };
}
Votes.propTypes = {
  votes: PropTypes.number,
  id: PropTypes.number
};
export default Votes;
