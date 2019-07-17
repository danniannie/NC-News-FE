import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import "../styles/Comments.css";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    username: "jessjelly"
  };

  render() {
    const { comments, username } = this.state;
    const { article_id } = this.props;

    return (
      <section className="comments">
        <AddComment
          article_id={article_id}
          addNewComment={this.addNewComment}
          username={username}
        />
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              article_id={article_id}
              refreshComments={this.refreshComments}
              username={username}
            />
          );
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

  refreshComments = async article_id => {
    const comments = await api.getComments(article_id);
    this.setState({ comments });
  };
}

export default Comments;
