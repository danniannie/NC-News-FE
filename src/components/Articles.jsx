import React, { Component } from "react";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";
import Sort from "./Sort";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "asc"
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <section className="main">
        <Sort handleClick={this.handleClick} />

        <section className="articles">
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </section>
      </section>
    );
  }

  handleClick = event => {
    const sort = event.target.id;
    const sort_by = sort.split(" ")[0];
    const order = sort.split(" ")[1];

    this.setState({ sort_by, order });
  };

  componentDidMount = async () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;

    const articles = await api.fetchArticles(topic, sort_by, order);
    this.setState({ articles });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    if (
      prevProps.topic !== topic ||
      prevState.sort_by !== sort_by ||
      prevState.order !== order
    ) {
      const articles = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles });
    }
  };
}

export default Articles;

// Sort by: <Link to={"/articles?sortby=date"}>Date</Link> / Comment{ " " }
// <Link to={"/articles?sortby=comments"}>Comments</Link>{ " " }
// <Link to={"/articles?sortby=votes"}>Votes</Link>
