import React, { Component } from "react";

class Votes extends Component {
  state = {
    inc_votes: 0
  };
  render() {
    const { votes, comment_id } = this.props;

    return (
      <div className="votes">
        Votes: {votes} /
        <span id="1" onClick={this.handleClick}>
          Vote UP /
        </span>
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
