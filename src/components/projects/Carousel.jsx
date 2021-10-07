import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const carouselContent = [
    {
      key: 1,
      id: 1,
      title: "Card 1",
      color: "bg-red-200",
    },
    {
      key: 2,
      id: 2,
      title: "Card 2",
      color: "bg-green-200",
    },
    {
      key: 3,
      id: 3,
      title: "Card 3",
      color: "bg-yellow-200",
    },
    {
      key: 4,
      id: 4,
      title: "Card 4",
      color: "bg-blue-200",
    },
    {
      key: 5,
      id: 5,
      title: "Card 5",
      color: "bg-indigo-200",
    },
    {
      key: 6,
      id: 6,
      title: "Card 6",
      color: "bg-purple-200",
    },
  ];

  const [cardArray, setCardArray] = useState([...carouselContent]);

  const CARD_DISPLAY_COUNT = 3;

  function shiftArrayLeft() {
    let cards = [...cardArray];
    cards.push(cards[0]);
    cards.shift();
    setCardArray(cards);
  }

  function shiftArrayRight() {
    let cards = [...cardArray];
    cards.unshift(cards.pop());
    setCardArray(cards);
  }

  function handleMoveRight() {
    shiftArrayRight();
  }

  function handleMoveLeft() {
    shiftArrayLeft();
  }

  return (
    <div className="flex justify-around items-center">
      <button onClick={handleMoveLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="bg-gray-700 grid grid-cols-3 gap-4 p-4">
        {cardArray.map((item, index) => (
          index < CARD_DISPLAY_COUNT &&
          <CarouselItem
            key={item.key}
            bgColor={item.color}
            content={item.title}
            cardsToShow={cardArray}
          />
        ))}
      </div>

      <button onClick={handleMoveRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
