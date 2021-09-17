import React from "react";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";

export default function HomePage({ ...props }) {
  return (
    <>
      <Services />
      <Cards />
      <ContactForm/>
    </>
  );
}
