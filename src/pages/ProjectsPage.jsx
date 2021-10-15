import React from "react";
import Cards from "../components/projects/Cards"
import Section from "../layouts/Section";

export default function ProjectsPage({ ...props }) {
  return (
    <Section heading={"Previous Projects"} bgColor={"bg-yellow-100"}>
      <div className="md:px-6">
      <Cards/>
      </div>
    </Section>
  );
}