import React, { Component } from "react";
import * as api from "../utils/api";
import { navigate } from "@reach/router";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";
import Sort from "./Sort";
import PropTypes from "prop-types";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "asc",
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="main">
            <Sort handleClick={this.handleClick} />
            <section className="articles">
              {articles.map(article => (
                <ArticleCard key={article.article_id} article={article} />
              ))}{" "}
            </section>
          </section>
        )}
      </div>
    );
  }

  handleClick = value => {
    const sort_by = value.split(" ")[0];
    const order = value.split(" ")[1];
    console.log(sort_by, order);
    this.setState({ sort_by, order });
  };

  componentDidMount = async () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;

    try {
      const articles = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false });
    } catch (err) {
      navigate("/error", {
        state: {
          errmsg: "Sorry this topic is not available.",
          replace: true
        }
      });
    }
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

Articles.propTypes = {
  topic: PropTypes.string
};

export default Articles;
