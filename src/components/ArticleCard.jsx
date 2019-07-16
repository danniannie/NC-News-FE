import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article: { title, article_id } }) => {
  return (
    <div>
      {" "}
      <Link to={`/articles/${article_id}`}>
        <p className="articleCard">{title}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
