import React from 'react'
import ButtonLink from "../../components/common/ButtonLink";
import ABOUT_US_CONTENT from "../../content/aboutUsContent";
import NAV_CONTENT from '../../content/navContent';

export default function AboutText() {
  
  const { aboutImage, textContent } = ABOUT_US_CONTENT;
  const {contact, back} = NAV_CONTENT.buttonLinks
  
  return (
    <div className="lg:flex lg:justify-between">
    <div className="mr-10 w-full lg:w-auto">
      <img className="rounded-sm" src={aboutImage} alt={"planning session"}/>
    </div>
    <div className="mt-8 lg:mt-0">
        <p className="
      text-lg leading-7 tracking-wide mb-4 text-justify lg:text-left">
        {textContent}
      </p>
      <div className="w-full flex flex-row mt-8">
        <ButtonLink
          content={contact}
          bgColor={"bg-yellow-800 lg:bg-opacity-90"}
          borderColor={"border-yellow-800"}
          size={"text-sm md:text-lg"}
          linkTo={"/contact"}
        />
        <div className="w-4" />

        <ButtonLink
          content={back}
          bgColor={"bg-gray-800 lg:bg-opacity-90"}
          borderColor={"border-gray-700"}
          size={"text-sm md:text-lg"}
          linkTo={"/"}
        />
      </div>
    </div>
  </div>
  )
}
