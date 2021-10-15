import React from "react";
import TestForm from "../components/form/TestForm";
import Location from "../components/map/Location";
import Section from "../layouts/Section";

export default function ContactPage() {

  return (
    <Section heading={"Contact Us"} bgColor={"bg-yellow-100"}>
      <div className="lg:flex lg:justify-center">
        <TestForm />
        <Location/>
      </div>
    </Section>
  );
}
