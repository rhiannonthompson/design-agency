import React from "react";
import Card from "./Card";
import kitchen from "../assets/images/kitchen.jpg";
import livingroom from "../assets/images/livingroom.jpg";
import sofa from "../assets/images/sofa.jpg";

export default function Cards({ ...props }) {
  
  return (
    <div className="flex flex-row flex-wrap py-14 justify-center">
      <Card img={kitchen} title="Project 1" />
      <Card img={livingroom} title="Project 2" />
      <Card img={sofa} title="Project 3"/>
    </div>
  );
}
