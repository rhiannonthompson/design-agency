import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import heroImage from "../assets/images/hero.jpg";
import Footer from "../components/Footer";

export default function HomePageLayout({ heading, ...props }) {
  return (
    <div className="min-h-full relative bg-gray-100">
      <div className="h-screen flex flex-col">
        <Header />

        <div
          className=" relative flex flex-col justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {heading && (
            
            <h1 className="relative px-2 text-center text-white font-thin uppercase text-3xl md:text-4xl lg:text-5xl py-4 z-20">
              {heading}
            </h1>
     
          )}
           <h2 className=" relative px-2 text-center text-white italic font-extralight text-2xl md:text-3xl pb-4 z-20">
              Live a beautiful life
              </h2>
          <div className="flex justify-center z-20">
            <Button content="Contact Us" />
          </div>
          <div className="z-0 absolute -top-0 h-full w-full bg-black opacity-40"/>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto">{props.children}</div>
      <Footer />
    </div>
  );
}

HomePageLayout.defaultProps = {
  heading: "",
};
