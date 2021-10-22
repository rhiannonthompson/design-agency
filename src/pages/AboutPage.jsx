import React from "react";
import AboutText from "../components/about/AboutText";
import Section from "../layouts/Section";


export default function AboutPage() {
  return (
    <Section heading={"About Us"}>  
     <AboutText/>
    </Section>
  );
}
