import React, { useState } from "react";
import Quotes from "./component/Quotes";

function App() {
  const quotes = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ];
  const colors = [
    "#1B1212",
    "#C9BC91 ",
    "#191970",
    "#023020",
    "#FFC132",
    "#2292EA",
    "#666362",
  ];
  const [randomNumber, setRandomNumber] = useState(0);
  const [color, setcolor] = useState(0);

  const generateQuotes = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const color = Math.floor(Math.random() * colors.length);
    setRandomNumber(randomNumber);
    setcolor(color);
  };

  return (
    <div
      style={{
        backgroundColor: `${colors[color]} `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className={`m-5 p-3 border-2 w-96 h-48 flex flex-col justify-start items-center rounded-xl bg-white `}
      >
        <label style={{ color: ` ${colors[color]}` }}>
          '' {quotes[randomNumber].quote}.
        </label>
        <label
          style={{
            color: ` ${colors[color]}`,
          }}
          className="justify-end"
        >
          ''{quotes[randomNumber].author}...
        </label>
        <div className=" static ">
          <button
            onClick={generateQuotes}
            className="text-white rounded-md p-2 mt-3"
            style={{ backgroundColor: `${colors[color]} ` }}
          >
            Get Quotes
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
