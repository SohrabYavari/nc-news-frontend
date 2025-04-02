import React, { useState } from "react";
import { postCommentOnArticle } from "../../utils/api";

export default function CommentForm({ article }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postCommentOnArticle(article.article_id, username, body);
      setUsername("");
      setBody("");
    } catch (err) {
      console.error("Error: ", err);
      if (err) {
        setError("Failed to post comment. Please try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border-2 p-2 rounded-2xl"
    >
      <fieldset className="px-2 flex w-full gap-2">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full"
          required
        />
      </fieldset>
      <fieldset className="px-2 flex flex-col w-full gap-2">
        <label>Comment: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="max-w-full border"
        />
      </fieldset>
      {error && <p>{error}</p>}
      <button type="submit" className="btn btn-accent m-2">
        Post Comment
      </button>
    </form>
  );
}
