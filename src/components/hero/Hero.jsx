import React from "react";
import ButtonLink from "../../components/common/ButtonLink";
import heroImage from "../../assets/images/hero.jpg";
import HEADINGS from "../../content/headings";

export default function Hero() {
  const defaultTitle = "Main Title";
  const { mainTitle, subTitle } = HEADINGS.hero;

  return (
    <div
      className=" relative flex flex-col justify-center h-full bg-cover bg-center bg-scroll lg:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {mainTitle ? (
        <h1 className="h1">{mainTitle}</h1>
      ) : (
        <h1 className="h1">{defaultTitle}</h1>
      )}
      {subTitle ? (
        <h2 className="h2">{subTitle}</h2>
      ) : (
        <h2 className="h2">{defaultTitle}</h2>
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
