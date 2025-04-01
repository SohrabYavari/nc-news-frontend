import React from "react";
import { Link } from "react-router-dom";
import Card from "../global/Card";

export default function ArticleList({ articles }) {
  return articles.map((article) => (
    <Link key={article.article_id} to={`/home/articles/${article.article_id}`}>
      <Card
        img={article.article_img_url}
        title={article.title}
        topic={article.topic}
        author={article.author}
        created_at={article.created_at}
        votes={article.votes}
      />
    </Link>
  ));
}
