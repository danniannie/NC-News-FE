import React, { Component } from "react";
import * as api from "../utils/api";
import "../styles/CommentCard.css";
import "../styles/Comments.css";

class AddComment extends Component {
  state = {
    body: "",
    err: null,
    conditional: "textBox"
  };
  render() {
    const { body, err, conditional } = this.state;

    return (
      <div className="addComment">
        <div>
          <form onSubmit={this.handleSubmit} >
            <div className="commentContainer">
              <label htmlFor="commentInput">Leave a comment</label><br></br>

              <textarea
                id="commentInput"
                type="text"
                rows="3"
                cols="30"
                placeholder="Write your comment here..."
                value={body}
                onChange={this.handleChange}
                className={conditional}
              />
              <button type="submit">Post Comment</button></div>
            {conditional === "incorrect" ? (
              <p> Please include text</p>
            ) : (
                <p></p>
              )}

          </form>
        </div>
        {err && <p>Error, please try again</p>}
      </div>
    );
  }

  handleChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    const { body } = this.state;
    event.preventDefault();
    const { article_id, addNewComment, username } = this.props;
    if (body.length) {
      const comment = { username, body };
      api
        .postComment(comment, article_id)
        .then(comment => {
          addNewComment(comment);
          this.setState({ body: "" });
        })
        .catch(err => {
          this.setState({ err });
        });
    } else {
      this.setState({ conditional: "incorrect" });
    }
  };
}

export default AddComment;
