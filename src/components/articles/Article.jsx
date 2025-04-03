// lib imports
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

// Apis
import { getArticleComments, getArticleById } from "../../utils/api";

// Comps
import CommentList from "../comments/CommentList";
import ArticleDetails from "./ArticleDetails";
import CommentForm from "../comments/CommentForm";

export default function Article() {
  // state management
  const [article, setArticle] = useState(null);
  const [articleComment, setArticleComment] = useState([]);
  const [loading, setLoading] = useState(true);

  // params and navigation
  const { article_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (article_id) {
      const fetchSpecificArticle = async () => {
        try {
          const { article } = await getArticleById(article_id);
          setArticle(article);
          setLoading(false);
        } catch (error) {
          console.error(error);
          navigate("/home/articles");
        }
      };
      fetchSpecificArticle();
    } else {
      setArticle(null);
    }
  }, [article_id, navigate]);

  useEffect(() => {
    if (article_id) {
      const fetchComments = async () => {
        try {
          const data = await getArticleComments(article_id);
          setArticleComment(data?.comments || []);
        } catch (error) {
          console.error("Failed to fetch comments:", error);
        }
      };
      fetchComments();
    }
  }, [article_id]);

  const handleBackToList = () => {
    navigate("/home/articles");
  };

  if (loading) {
    return (
      <div className="flex w-ful h-screen justify-center items-center">
        <BounceLoader />
      </div>
    );
  }

  if (!article) return <p className="pt-20">No article found</p>;

  return (
    <div>
      <button
        onClick={handleBackToList}
        className="mt-20 btn btn-wide btn-accent"
      >
        {`<---`} Back to Articles
      </button>
      <ArticleDetails article={article} />
      <CommentForm article={article} />
      <CommentList comments={articleComment} />
    </div>
  );
}
