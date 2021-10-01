import React from "react";
import Cards from "../components/projects/Cards";
import Section from "../layouts/Section";
import Services from "../components/posts/Services";
import TestForm from "../components/form/TestForm";
import HEADINGS from "../content/headings";

export default function HomePage({ ...props }) {
  
  const [services, cards, contact] = HEADINGS.sections;
  
  return (
    <>   
      <Section heading={services}>
        <Services />
      </Section>

      <Section heading={cards} bgColor="bg-yellow-100">
        <Cards />
      </Section>
      
      <Section heading={contact}>
        <TestForm />
      </Section>
    </>
  );
}
