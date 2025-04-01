import React from "react";
import date from "../../assets/date.svg";
import vote from "../../assets/vote.svg";

export default function Card({ img, title, topic, author, created_at, votes }) {
  const formattedDate = new Date(created_at).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="card md:h-[475px] p-1 w-full mx-auto bg-neutral text-accent hover:scale-105 transition-all duration-300">
      <div className="flex justify-end gap-[10%] p-2 border-b-2">
        <p className="flex gap-2 items-center">
          <img src={date} alt="date image" className="w-5" /> {formattedDate}
        </p>
        <p className="flex gap-2 items-center">
          <img src={vote} alt="date image" className="w-5" /> {votes}
        </p>
      </div>
        <h3 className="py-5 flex justify-center items-center w-full h-full font-semibold text-center md:text-2xl">{title}</h3>
      <div className="p-1 w-full h-full flex flex-col justify-end">
        <img
          src={img}
          alt="article image"
          className="rounded-md h-[250px] w-full object-cover"
        />
        <p className="text-end">
          by <span className="italic">{author}</span> on{" "}
          <span className="italic font-semibold">{topic}</span>
        </p>
      </div>
    </div>
  );
}
