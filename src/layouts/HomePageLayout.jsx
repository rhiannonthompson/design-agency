import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import Hero from "../components/header/Hero";

export default function HomePageLayout({ heading, ...props }) {
  return (
    <div className="min-h-full relative bg-gray-100">
      <div className="h-screen flex flex-col">
        <Header />
        <Hero heading={heading}/>
      </div>
      <div className="w-full">{props.children}</div>
      <Footer />
    </div>
  );
}

HomePageLayout.defaultProps = {
  heading: "",
};
