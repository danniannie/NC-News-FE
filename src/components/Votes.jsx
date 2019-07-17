import React, { Component } from "react";
import "../styles/Votes.css";
class Votes extends Component {
  state = {
    inc_votes: 0
  };
  render() {
    const { votes, comment_id } = this.props;

    return (
      <div className="votes">
        Votes: {votes} /<br />
        <span id="1" onClick={this.handleClick}>
          Vote UP /
        </span>
        <br />
        <span id="-1" onClick={this.handleClick}>
          Vote DOWN
        </span>
      </div>
    );
  }

  handleClick = event => {
    const inc_votes = event.target.id;
    this.setState({ inc_votes });
  };
}

export default Votes;
