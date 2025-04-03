import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import ArticleList from "../articles/ArticleList";
import { BounceLoader } from "react-spinners";
import TopicsDropdown from "../../dropdowns/TopicsDropdown";
import SortByDropdown from "../../dropdowns/SortByDropdown";

export default function ArticlesPage() {
  // useStates for articles
  const [ncArticles, setNcArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTopic, setPageTopic] = useState("");
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("created_at");

  const sortByMapping = {
    author: "author",
    title: "title",
    article_id: "article_id",
    topic: "topic",
    created_at: "created_at",
    votes: "votes",
    article_img_url: "article_img_url",
    comment_count: "comment_count",
  };

  // data fetching
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const articles = await getArticles(pageTopic);

        const sortedArticles = articles.sort((a, b) => {
          const aValue = a[sortByMapping[sortBy]] ?? "";
          const bValue = b[sortByMapping[sortBy]] ?? "";

          if (sortBy === "created_at") {
            return order === "asc"
              ? new Date(aValue) - new Date(bValue)
              : new Date(bValue) - new Date(aValue);
          }

          if (typeof aValue === "number" && typeof bValue === "number") {
            return order === "asc" ? aValue - bValue : bValue - aValue;
          }

          return order === "asc"
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue));
        });

        setNcArticles(sortedArticles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [pageTopic, order, sortBy]);

  // loading spinner
  if (loading) {
    return (
      <div className="flex w-ful h-screen justify-center items-center">
        <BounceLoader />
      </div>
    );
  }

  // handle order change
  const orderChange = () => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <section id="articles" className="pt-20">
      <TopicsDropdown setPageTopic={setPageTopic} />
      <SortByDropdown setSortBy={setSortBy} />
      <button onClick={orderChange} className="btn btn-xs my-4">
        Sort {order === "asc" ? "Descending" : "Ascending"}
      </button>
      <div className="pt-20 px-2 grid md:grid-cols-3 gap-10">
        <ArticleList articles={ncArticles} />
      </div>
    </section>
  );
}
