import React from "react";

export default function SortByDropdown({ setSortBy }) {
  const allowedSortByColumns = [
    "author",
    "title",
    "article_id",
    "topic",
    "created_at",
    "votes",
    "article_img_url",
    "comment_count",
  ];

  // Handle the sorting selection
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    // Set the selected value directly in snake_case
    setSortBy(selectedValue);
  };

  return (
    <select onChange={handleChange} className="btn btn-xs my-4">
      {allowedSortByColumns.map((column) => (
        <option key={column} value={column}>
          {column.replace(/_/g, " ").toUpperCase()}
        </option>
      ))}
    </select>
  );
}
