import React from "react";
import Cards from "../components/Cards";
import Services from "../components/Services";
import TestForm from "../components/TestForm"

export default function HomePage({ ...props }) {
  return (
    <>
      <Services />
      <Cards />
      <TestForm/>
    </>
  );
}
