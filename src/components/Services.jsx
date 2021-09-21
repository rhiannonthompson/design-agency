import React from "react";
import Service from "./Service";
import moodboard from "../assets/images/moodboard.jpg";
import paintbrush from "../assets/images/paintbrush.jpg";
import stairs from "../assets/images/stairs.jpg";

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
    <section className="bg-yellow-50 px-4 md:px-16 lg:px-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto pt-14 px-6">
        <h3 className="text-3xl md:text-5xl font-thin border-b-2 border-gray-600 pb-4 md:py-6">
          Our Services
        </h3>
        <Service
          image={moodboard}
          direction={imagePosition.fromRight}
          textMargin={textMargin.right}
          order={imagePosition.orderLast}
          border={"border-b-2"}
        />
         <Service
          image={paintbrush}
          direction={imagePosition.fromLeft}
          textMargin={textMargin.left}
          order={imagePosition.orderFirst}
          border={"border-b-2"}
        />
        <Service
          image={stairs}
          direction={imagePosition.fromRight}
          textMargin={textMargin.right}
          order={imagePosition.orderLast}
          border={"border-b-0"}
        />
      </div>
    </section>
  );
}
