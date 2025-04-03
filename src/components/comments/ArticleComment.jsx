import React, { useState } from "react";
import DeleteCommentButton from "./DeleteCommentButton";

export default function ArticleComment({ comment }) {
  const [deleted, setDeleted] = useState(false);


  return deleted ? (
    <></>
  ) : (
    <div className="my-5 p-1 rounded-md border-2">
      <p>Comment: {comment.body}</p>
      <p>author: {comment.author}</p>
      <p>created: {comment.created_at}</p>
      <p>votes: {comment.votes}</p>
      <DeleteCommentButton setDeleted={setDeleted} comment={comment} />
    </div>
  )
}
