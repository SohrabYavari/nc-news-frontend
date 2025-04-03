import React, { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

export default function TopicsDropdown({ setPageTopic }) {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { topics } = await getTopics();
        setTopics(topics);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchTopics();
  }, []);

  const handleChange = (e) => {
    const chosenTopic = e.target.value;
    setSelectedTopic(chosenTopic)
    setPageTopic(chosenTopic)
  };
  return (
    <select
        value={selectedTopic}
        onChange={handleChange}
         className="select select-bordered w-full max-w-xs"
    >
        <option value="">All Categories</option>
      {topics.map((topic) => {
        return (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        );
      })}
    </select>
  );
}
