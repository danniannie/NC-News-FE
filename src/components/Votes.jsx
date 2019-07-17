import React, { Component } from "react";
import "../styles/Votes.css";
class Votes extends Component {
  state = {
    voteChange: 0,
    err: null
  };
  render() {
    const { votes } = this.props;

    return (
      <div className="votes">
        Votes: {votes + this.state.voteChange} /<br />
        {/* <span onClick={this.vote(1)}>Vote UP /</span>
        <br />
        <span onClick={this.vote(-1)}>Vote DOWN</span> */}
      </div>
    );
  }

  // vote = increment => {
  //   const { id } = this.props;

  //   api.votes(id, increment).catch(err => {
  //     this.setState(state => ({
  //       voteChange: state.voteChange - increment
  //     }));
  //   });

  //   this.setState(state => ({
  //     voteChange: state.voteChange + increment
  //   }));
  // };
}
export default Votes;
