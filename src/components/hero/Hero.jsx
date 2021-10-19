import React from "react";
import ButtonLink from "../../components/common/ButtonLink";
import heroImage from "../../assets/images/hero.jpg";
import HEADINGS from "../../content/headings";

export default function Hero() {
  const defaultTitle = "Main Title";
  const { mainTitle, subTitle } = HEADINGS.hero;

  return (
    <div
      className=" relative flex flex-col justify-center h-screen bg-cover bg-center bg-scroll bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {mainTitle ? (
        <h1 className="relative px-2 text-center text-white font-thin uppercase text-2xl md:text-4xl lg:text-5xl mt-40 pb-4 z-20">
          {mainTitle}
        </h1>
      ) : (
        <h1 className="relative px-2 text-center text-white font-thin uppercase text-2xl md:text-4xl lg:text-5xl mt-40 pb-4 z-20">
          {defaultTitle}
        </h1>
      )}
      {subTitle ? (
        <h2 className="relative px-2 text-center text-white italic font-extralight text-xl md:text-3xl pb-8 z-20">
          {subTitle}
        </h2>
      ) : (
        <h2 className="relative px-2 text-center text-white italic font-extralight text-xl md:text-3xl pb-8 z-20">
          {defaultTitle}
        </h2>
      )}
      <div className="flex justify-center z-20">
        <ButtonLink
          linkTo="/contact"
          content="Contact Us"
          bgColor={"bg-gray-700 lg:bg-opacity-70"}
          borderColor={"border-white"}
          size={"text-lg md:text-xl"}
        />
      </div>
      <div className="z-0 absolute -top-0 h-full w-full bg-black opacity-50" />
    </div>
  );
}
