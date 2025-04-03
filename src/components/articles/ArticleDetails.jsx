// lib imoports
import React, { useEffect, useState } from "react";

// svgs
import comment from "../../assets/comment.svg";
import date from "../../assets/date.svg";
import vote from "../../assets/vote.svg";
import author from "../../assets/author.svg";
import topic from "../../assets/topic.svg";

// comps and utils imports
import { updateArticleVotes } from "../../utils/api";

export default function ArticleDetails({ article }) {
  // states for article votes
  const [articleVote, setArticleVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  
  useEffect(() => {
    if (article) {
      setArticleVote(article.votes);
      setHasVoted(false);
  
      try {
        const votedArticles = JSON.parse(localStorage.getItem("votedArticles")) || [];
        if (votedArticles.includes(article.article_id)) {
          setHasVoted(true);
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        alert("Issue loading previous votes.");
      }
    }
  }, [article]);

  if (article.votes === null) {
    article.votes = 0
  }
  
  if (!article) return <p className="pt-20">Loading... </p>;
  
  // date formatted for human readability
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-UK",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );


  const handleVote = async () => {
    if (hasVoted) return;

    try {
      const data = await updateArticleVotes(article.article_id, 1);
      setArticleVote(data.votes);
      setHasVoted(true);

      // Store vote in localStorage
      // will change to vote is stored based on user potentially?
      const votedArticles =
        JSON.parse(localStorage.getItem("votedArticles")) || [];
      votedArticles.push(article.article_id);
      localStorage.setItem("votedArticles", JSON.stringify(votedArticles));
    } catch (err) {
      console.error("Failed to update votes:", err);
    }
  };

  return (
    <section className="pt-2">
      <div className="flex flex-col w-full">
        <img
          src={article.article_img_url}
          alt={article.title}
          className="md:h-[500px] object-cover"
        />
        <h1 className="md:text-6xl text-4xl text-center py-5 md:w-[75%] mx-auto">
          {article.title}
        </h1>

        <div className="py-5 border-t-2 border-b-2 font-semibold">
          <div className="md:w-[75%] mx-auto">
            <div className="flex justify-between">
              <p className="flex gap-2 items-center">
                <img src={date} className="w-5" />
                {formattedDate}
              </p>
              <div className="flex justify-end gap-2">
                <p className="flex gap-2 items-center">
                  <img src={author} className="w-5" />
                  {article.author} |
                </p>
                <p className="flex gap-2 items-center">
                  <img src={vote} className="w-6" />
                  {articleVote}
                </p>
              </div>
            </div>
            <p className="flex gap-2 items-center justify-end">
              <img src={topic} className="w-6" />
              {article.topic}
            </p>
          </div>
        </div>
        <p className="py-20 md:w-[75%] mx-auto text-2xl">{article.body}</p>

        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`btn ${hasVoted ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {hasVoted ? "Voted" : "Like Article"}
        </button>

        <div className="md:w-[75%] mx-auto">
          <p className="flex gap-2 items-center">
            <img src={comment} className="w-6" />
            {article.comment_count}
          </p>
        </div>
      </div>
    </section>
  );
}
