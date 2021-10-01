import React from "react";
import CARD_CONTENT from "../../content/cardContent";
import Card from "./Card";

export default function Cards({ ...props }) {
  console.log(CARD_CONTENT);
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {CARD_CONTENT.map((item) => (
        <Card
          key={item.key}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
