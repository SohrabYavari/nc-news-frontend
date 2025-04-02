export default function ArticleComment({ comment }) {
  return (
    <div className="my-5 p-1 rounded-md border-2">
      <p>Comment: {comment.body}</p>
      <p>author: {comment.author}</p>
      <p>created: {comment.created_at}</p>
      <p>votes: {comment.votes}</p>
    </div>
  );
}
