import React, { useState } from "react";
import useMediaQuery from "../../utilities/useMediaQuery.js";
import CarouselItem from "./CarouselItem";
import RightArrow from "../../icons/RightArrow.js";
import LeftArrow from "../../icons/LeftArrow";
import CAROUSEL_CONTENT from "../../content/carouselContent.js";

export default function Carousel() {
  const [cardArray, setCardArray] = useState([...CAROUSEL_CONTENT]);
  const isPageLarge = useMediaQuery(`(min-width: 768px)`);
  const LARGE_CARD_DISPLAY_COUNT = 3;
  const CARD_DISPLAY_COUNT = 1;

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
    <div className="flex flex-row justify-around items-center">
      <button onClick={handleMoveLeft}>
        <LeftArrow />
      </button>

      <div className="flex flex-row">
        {cardArray.map((item, index) =>
          isPageLarge
            ? index < LARGE_CARD_DISPLAY_COUNT && (
                <CarouselItem
                  key={item.key}
                  content={item.title}
                  image={item.image}
                  id={item.key}
                />
              )
            : index < CARD_DISPLAY_COUNT && (
                <CarouselItem
                  key={item.key}
                  content={item.title}
                  image={item.image}
                  id={item.key}
                />
              )
        )}
      </div>

      <button onClick={handleMoveRight}>
        <RightArrow />
      </button>
    </div>
  );
}
