import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article: { title, article_id } }) => {
  return (
    <div>
      <h4 className="articleCard">
        {title}{" "}
        <Link to={`/articles/${article_id}`}>
          {" "}
          <br />
          Read More...
        </Link>
      </h4>
    </div>
  );
};

export default ArticleCard;
