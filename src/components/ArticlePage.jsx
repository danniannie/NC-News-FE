import React, { Component } from "react";
import * as api from "../utils/api";

class ArticlePage extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <section>
        <h2>{article.title}</h2>

        <p>{article.body}</p>
        <h5>Author: {article.author}</h5>
        <p>Created at: {article.created_at}</p>
        <p>Topic: {article.topic}</p>
      </section>
    );
  }

  componentDidMount = async () => {
    const { article_id } = this.props;
    const article = await api.fetchArticlebyId(article_id);

    this.setState({ article });
  };
}

export default ArticlePage;
