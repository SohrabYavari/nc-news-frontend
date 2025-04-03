import { deleteCommentOnArticle } from "../../utils/api";

export default function DeleteCommentButton({ comment, setDeleted }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteCommentOnArticle(comment.comment_id);
      setDeleted(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <button onClick={handleDelete} className="btn btn-xs btn-block">
      Delete Comment
    </button>
  );
}
