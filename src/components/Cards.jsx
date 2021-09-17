import React from "react";
import Card from "./Card";
import kitchen from "../assets/images/kitchen.jpg";
import livingroom from "../assets/images/livingroom.jpg";
import sofa from "../assets/images/sofa.jpg";

export default function Cards({ ...props }) {
  return (
    <section className="bg-yellow-100 px-4 md:px-16 lg:px-0">
      <div className="max-w-7xl mx-auto py-14 px-6">
        <h3 className="text-3xl md:text-5xl font-thin border-b-2 border-gray-600 pb-4 md:py-6">
          Previous Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-16">
          <Card img={kitchen} title="Project 1" />
          <Card img={livingroom} title="Project 2" />
          <Card img={sofa} title="Project 3" />
          <Card img={kitchen} title="Project 1" />
          <Card img={livingroom} title="Project 2" />
          <Card img={sofa} title="Project 3" />
        </div>
      </div>
    </section>
  );
}
