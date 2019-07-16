import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article: { title, article_id } }) => {
  return (
    <div>
      {" "}
      <Link to={`/articles/${article_id}`}>
        <h4 className="articleCard">{title}</h4>
      </Link>
    </div>
  );
};

export default ArticleCard;
