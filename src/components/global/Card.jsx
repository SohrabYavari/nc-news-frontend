import React from "react";
import comment from '../../assets/comment.svg'
import date from '../../assets/date.svg'
import vote from '../../assets/vote.svg'

export default function Card({
  img,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
}) {

  const formattedDate = new Date(created_at).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="card p-1 w-full mx-auto bg-secondary shadow-2xl hover:scale-y-105 transition-all">
      <div className="flex justify-end gap-[10%] p-2 border-b-2">
        <p className="flex gap-2 items-center"><img src={date} alt="date image" className="w-5" /> {formattedDate}</p>
        <p className="flex gap-2 items-center"><img src={vote} alt="date image" className="w-5" /> {votes}</p>
        <button className="btn btn-xs btn-primary"> <img src={comment} alt="date image" className="w-4" />  {comment_count}</button>
      </div>
      <div className="p-1 ">
        <img src={img} alt="article image" className="rounded-md h-[250px] w-full object-cover"/>
        <h3 className="py-5 font-semibold text-center">{title}</h3>
        <p className="text-end">by <span className="italic">{author}</span> on <span className="italic font-semibold">{topic}</span></p>
      </div>
    </div>
  );
}