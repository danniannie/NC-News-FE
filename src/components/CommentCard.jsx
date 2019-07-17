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
    const { refreshComments, article_id } = this.props;

    api.deleteComment(comment_id).then(() => {
      refreshComments(article_id);
    });
  };
}

export default CommentCard;
