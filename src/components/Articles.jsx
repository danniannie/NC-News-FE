import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <section>
        <nav>Sort by Date Comment Count Votes</nav>
        {articles.map(article => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </section>
    );
  }

  componentDidMount = async () => {
    const { topic } = this.props;
    const articles = await api.fetchArticles(topic);
    this.setState({ articles });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      const articles = await api.fetchArticles(topic);
      this.setState({ articles });
    }
  };
}

export default Articles;
