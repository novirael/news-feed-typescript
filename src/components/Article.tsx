import React from "react";
import "./Article.css";
import { Headline } from "./layouts/Headline";
import { ArticleDescription } from "./ArticleDescription";
import { ArticleButton } from "./ArticleButton";
import { Tag } from "./ui/Tag";

const Article = ({ article}: { article: any }) => (
  <div className="Article">
    <Headline text={article.title} />
    <ArticleDescription text={article.description} />
    <Tag name={article.tag} onClick={() => console.log("clicked tag")} />
    <ArticleButton />
  </div>
);

export default Article;
