import React from "react";
import Scroll from "react-scroll";
import Cards from "../components/projects/Cards";
import Section from "../layouts/Section";
import Services from "../components/posts/Services";
import TestForm from "../components/form/TestForm";
import HEADINGS from "../content/headings";

export default function HomePage({ ...props }) {
  const [services, cards, contact] = HEADINGS.sections;
  const Element = Scroll.Element;

  return (
    <>
      <Section heading={services}>
        <Services />
      </Section>

      <Section heading={cards} bgColor="bg-yellow-100">
        <Cards />
      </Section>

      <Element id="contact" name="contact">
        <Section heading={contact}>
          <TestForm />
        </Section>
      </Element>
    </>
  );
}
