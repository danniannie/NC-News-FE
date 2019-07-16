import React, { Component } from "react";
import * as api from "../utils/api";
import "../styles/ArticlePage.css";
import Comments from "./Comments";

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
          <section>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <h5>Author: {article.author}</h5>
            <p>Created at: {article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <section>
              <Comments article_id={this.props.article_id} />
            </section>
          </section>
        )}
      </section>
    );
  }

  componentDidMount = async () => {
    const { article_id } = this.props;
    const article = await api.fetchArticlebyId(article_id);

    this.setState({ article, isLoading: false });
  };
}

export default ArticlePage;
