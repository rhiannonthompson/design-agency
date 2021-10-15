import React from "react";
import Cards from "../components/projects/Cards";
import Section from "../layouts/Section";
import Services from "../components/posts/Services";
import TestForm from "../components/form/TestForm";
import HEADINGS from "../content/headings";
import Location from "../components/map/Location";

export default function HomePage({ ...props }) {
  const [services, cards, contact] = HEADINGS.sections;

  return (
    <>
      <Section heading={services} paddingBottom={"my-10 md:my-20"}>
        <Services />
      </Section>

      <Section heading={cards} bgColor="bg-yellow-100" paddingBottom={"my-10 md:my-20"}>
        <Cards />
      </Section>

        <Section heading={contact} paddingBottom={"my-10 md:my-20"}>
          <div className="lg:flex justify-center">
            <TestForm />
            <Location />
          </div>
        </Section>
    </>
  );
}
