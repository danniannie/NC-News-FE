import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";
import Sort from "./Sort";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    console.log(this.props);
    const { articles, isLoading } = this.state;

    return (
      <section className="article">
        <Sort />
        <section className="articles">
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </section>
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

// Sort by: <Link to={"/articles?sortby=date"}>Date</Link> / Comment{ " " }
// <Link to={"/articles?sortby=comments"}>Comments</Link>{ " " }
// <Link to={"/articles?sortby=votes"}>Votes</Link>
