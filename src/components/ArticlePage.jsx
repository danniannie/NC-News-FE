import React, { Component } from "react";
import * as api from "../utils/api";
import "../styles/ArticlePage.css";
import Comments from "./Comments";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import Moment from "react-moment";
import "moment-timezone";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const { article, isLoading } = this.state;

    return (
      <section>
        {" "}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <main data-cy='articleBody'>
              <section className="body">
                <h2>{article.title}</h2>
                <p className="text">{article.body}</p>
                <div className="articleExtras">
                  <p>Author: {article.author}</p>
                  <p>
                    Created at:{" "}
                    <Moment format="Do MMM YY LT">{article.created_at}</Moment>
                  </p>
                  <p>Topic: {article.topic}</p>
                </div>
              </section>
              <section>
                <Comments article_id={this.props.article_id} username={this.props.username} />
              </section>
            </main>
          )}
      </section>
    );
  }

  componentDidMount = async () => {
    const { article_id } = this.props;
    try {
      const article = await api.fetchArticlebyId(article_id);
      this.setState({ article, isLoading: false });
    } catch (err) {
      navigate("/error", {
        state: { errmsg: "Sorry this article is not found.", replace: true }
      });
    }
  };
}

ArticlePage.propTypes = {
  article_id: PropTypes.string
};

export default ArticlePage;
