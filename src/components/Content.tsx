import React from "react";
import articles from "../articles.json";
import Article from "./Article";

export const Content = () => (
  <div className="Content">
    <span>Recent articles ({articles.length})</span>
    {articles.map((article, index) => (
      <Article key={index} article={article} />
    ))}
  </div>
);
