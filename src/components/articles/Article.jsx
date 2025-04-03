// lib imports
import React, { useState, useEffect } from "react";

// Comps
import CommentList from "../comments/CommentList";
import ArticleDetails from "./ArticleDetails";
import { getArticleComments } from "../../utils/api";
import CommentForm from "../comments/CommentForm";

export default function Article({ article }) {
  const [articleComment, setArticleComment] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getArticleComments(article.article_id);
        setArticleComment(data.comments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, [article.article_id]);

  if (!article) return <p className="pt-20">Loading... </p>;

  return (
    <div>
      <ArticleDetails article={article} />
      <CommentForm article={article} />
      <CommentList comments={articleComment} />
    </div>
  );
}
