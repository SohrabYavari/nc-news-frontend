import comment from "../../assets/comment.svg";
import date from "../../assets/date.svg";
import vote from "../../assets/vote.svg";
import author from "../../assets/author.svg";
import topic from "../../assets/topic.svg";

export default function Article({ article }) {
  if (!article) return <p className="pt-20">Loading... </p>;

  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-UK",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

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

        <div className="py-5 border-t-2 border-b-2 font-semibold ">
          <div className="md:w-[75%] mx-auto">
            <div className="flex justify-between">
              <p className="flex gap-2 items-center">
                <img src={date} className="w-5" />
                {formattedDate}
              </p>
              <div className="flex justify-end gap-2 ">
                <p className="flex gap-2 items-center">
                  <img src={author} className="w-5" />
                  {article.author} |
                </p>
                <p className="flex gap-2 items-center">
                  <img src={vote} className="w-6" />
                  {article.votes}
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
