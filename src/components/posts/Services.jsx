import React from "react";
import Service from "./Service";
import POST_CONTENT from "../../content/postContent";

export default function Services({ ...props }) {
  const imagePosition = {
    fromRight: "lg:inset-0 lg:transform lg:translate-x-full lg:opacity-0",
    fromLeft: "lg:inset-0 lg:transform lg:-translate-x-full lg:opacity-0",
    orderFirst: "order-first",
    orderLast: "order-first lg:order-last",
  };

  const textMargin = {
    right: "lg:mr-20",
    left: "lg:ml-20",
  };

  return (
    <>
      {POST_CONTENT.map((item) =>
        item.id === POST_CONTENT.length ? (
          <Service
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subTitle}
            description={item.description}
            border="border-0"
          />
        ) : item.id % 2 === 0 ? (
          <Service
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subTitle}
            description={item.description}
            direction={imagePosition.fromLeft}
            textMargin={textMargin.left}
            order={imagePosition.orderFirst}
          />
        ) : (
          <Service
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subTitle}
            description={item.description}
          />
        )
      )}
    </>
  );
}
