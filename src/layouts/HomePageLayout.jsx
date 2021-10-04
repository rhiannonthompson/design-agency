import React from "react";
import Hero from "../components/hero/Hero";

export default function HomePageLayout({ heading, ...props }) {
  return (
    <div className="min-h-full relative bg-gray-100">
      <div className="h-screen flex flex-col">
        <Hero heading={heading}/>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}

HomePageLayout.defaultProps = {
  heading: "",
};
