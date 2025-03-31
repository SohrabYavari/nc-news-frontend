import React, { useEffect, useState } from "react";
import Card from "../global/Card";
import { getArticles } from "../../utils/api";

export default function ArticlesPage() {
  const [ncArticles, setNcArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getArticles();
        console.log(articles);
        setNcArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <section id="articles">
      {/* <ul className="pt-20 flex md:flex-row flex-col flex-wrap gap-5 md:w-2/4 mx-auto px-5"> */}
      <ul className="pt-20 px-2 grid md:grid-cols-3 gap-5">
        {ncArticles.map((article) => {
          return <Card
            key={article.article_id}
            img={article.article_img_url}
            title={article.title}
            topic={article.topic}
            author={article.author}
            created_at={article.created_at}
            votes={article.votes}
            comment_count={article.comment_count}
          />;
        })}
      </ul>
    </section>
  );
}
