import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import "../styles/Comments.css";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <section className="comments">
        <AddComment
          article_id={article_id}
          addNewComment={this.addNewComment}
        />
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

  addNewComment = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };
}

export default Comments;
