import React from "react";
import "../styles/CommentCard.css";
import Votes from "./Votes";
const CommentCard = ({
  comment: { comment_id, author, body, created_at, votes }
}) => {
  return (
    <section className="commentCard">
      <div className="comment">
        {" "}
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at}</p>
      </div>

      <Votes comment_id={comment_id} votes={votes} />
    </section>
  );
};

export default CommentCard;
