import React from "react";

interface quotesprop {
  quote: string;
  author: string;
  style: string;
}
const Quotes: React.FC<quotesprop> = ({ quote, author, style }) => {
  return (
    <div>
      <label className={`${style} font-bold text-xl`}>{quote}</label>

      <label className={`${style} flex justify-end text-lg`}>
        {author}
      </label>
    </div>
  );
};
export default Quotes;
