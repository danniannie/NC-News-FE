import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import "../styles/Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <section className="comments">
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    );
  }

  componentDidMount = async () => {
    const { article_id } = this.props;
    const comments = await api.getComments(article_id);
    this.setState({ comments });
  };
}

export default Comments;
