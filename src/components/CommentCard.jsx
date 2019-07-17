import React from "react";
import "../styles/CommentCard.css";
import "../styles/Comments.css";
import Votes from "./Votes";

const CommentCard = props => {
  const { comment_id, author, body, created_at, votes } = props.comment;
  return (
    <section className="commentCard">
      <div className="comment">
        {" "}
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at}</p>
      </div>

      <Votes id={comment_id} section="comments" votes={votes} />
    </section>
  );
};

export default CommentCard;
