import "../styles/CommentCard.css";
import "../styles/Comments.css";
import Votes from "./Votes";
import * as api from "../utils/api";
import Moment from "react-moment";
import "moment-timezone";

import React, { Component } from "react";



class CommentCard extends Component {
  render() {
    const { comment_id, author, body, created_at, votes } = this.props.comment;
    return (
      <section className="commentCard" data-cy='comments'>
        <div className="comment">
          {" "}
          <p className='commentBody'>{body}</p>
          <p className='author'>{author}</p>
          <p>
            <Moment format="Do MMM YY LT">{created_at}</Moment>
          </p>
          {this.props.username === author ? (
            <button onClick={this.handleClick}>DELETE</button>
          ) : (
              ""
            )}
        </div>
        <div className="commentVotes">
          <Votes id={comment_id} section="comments" votes={votes} />
        </div>
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
