import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    body: "",
    err: null
  };
  render() {
    const { body, err } = this.state;

    return (
      <div className="addComment">
        <div>
          <form onSubmit={this.handleSubmit} className="commentContainer">
            <label htmlFor="commentInput">Add Comment Here...</label>
            <textarea
              id="commentInput"
              type="text"
              rows="3"
              cols="30"
              placeholder="Post your comment here..."
              value={body}
              onChange={this.handleChange}
            />
            <button type="submit">Add your comment!</button>
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
      //change colour to red and display comment
    }
  };
}

export default AddComment;
