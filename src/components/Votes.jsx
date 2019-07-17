import React, { Component } from "react";
import "../styles/Votes.css";
import * as api from "../utils/api";
class Votes extends Component {
  state = {
    voteChange: 0,
    err: null
  };
  render() {
    const { votes } = this.props;
    return (
      <div className="votes">
        Votes: {votes + this.state.voteChange}
        <br />
        <button
          onClick={() => {
            this.vote(1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.vote(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }

  vote = increment => {
    const { id, section } = this.props;

    api
      .votes(id, increment, section)
      .then(response => {})
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
export default Votes;
