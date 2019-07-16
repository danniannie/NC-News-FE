import React from "react";
import "../styles/CommentCard.css";
const CommentCard = ({ comment: { author, body, created_at, votes } }) => {
  return (
    <section className="commentCard">
      <p>{body}</p>
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{votes}</p>
    </section>
  );
};

export default CommentCard;
