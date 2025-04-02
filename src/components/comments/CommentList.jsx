import React from "react";
import ArticleComment from "./ArticleComment";

export default function CommentList({ comments }) {
  if (!comments) {
    return <p>No comments available</p>;
  }
  return comments.map((comment) => {
    console.log(comment)
    return <ArticleComment key={comment.comment_id} comment={comment} />;
  });
}
