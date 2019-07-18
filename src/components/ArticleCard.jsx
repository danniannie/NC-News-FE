import React from "react";
import { Link } from "@reach/router";
import Votes from "./Votes";
import PropTypes from "prop-types";

const ArticleCard = ({ article: { title, article_id, votes } }) => {
  return (
    <div className="articleCard">
      <div className="articleText" />
      <Link to={`/articles/${article_id}`}>
        <p>{title}</p>
      </Link>
      <div className="articleVote">
        <Votes votes={votes} id={article_id} section="articles" />
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;
