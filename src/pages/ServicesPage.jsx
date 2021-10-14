import React from "react";
import Services from "../components/posts/Services";
import Section from "../layouts/Section";

export default function ServicesPage({ ...props }) {
  return (
    <Section heading={"Our Services"}>
      <Services />
    </Section>
  );
}
