import "../styles/CommentCard.css";
import "../styles/Comments.css";
import Votes from "./Votes";
import * as api from "../utils/api";

import React, { Component } from "react";

class CommentCard extends Component {
  render() {
    const { comment_id, author, body, created_at, votes } = this.props.comment;
    return (
      <section className="commentCard">
        <div className="comment">
          {" "}
          <p>{body}</p>
          <p>{author}</p>
          <p>{created_at}</p>
          <button onClick={this.handleClick}>DELETE!</button>
        </div>

        <Votes id={comment_id} section="comments" votes={votes} />
      </section>
    );
  }
  handleClick = event => {
    const { comment_id } = this.props.comment;
    api.deleteComment(comment_id).then(() => {
      //create a deleteComment function in comments, this filters all comments that aren't the one delted and sets the state as this
    });
  };
}

export default CommentCard;
