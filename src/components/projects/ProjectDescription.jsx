import React from "react";
import ButtonLink from "../common/ButtonLink";
import PROJECT_DESCRIPTION_CONTENT from "../../content/projectDescriptionContent";

export default function ProjectDescription() {

  const { firstParagraph, secondParagraph } = PROJECT_DESCRIPTION_CONTENT;

  return (
    <div className="my-8 md:mt-10 md:mb-4">
      <p className="text-lg leading-8 mb-4">
        {firstParagraph}
      </p>
      <p className="text-lg leading-8 mb-6">
        {secondParagraph}
      </p>
      <div className="w-full flex flex-row">
        <ButtonLink
          content={"contact us"}
          bgColor={"bg-yellow-800 lg:bg-opacity-90"}
          borderColor={"border-yellow-800"}
          size={"text-sm md:text-lg"}
          linkTo={"/contact"}
        />
        <div className="w-4" />

        <ButtonLink
          content={"Other Projects"}
          bgColor={"bg-gray-800 lg:bg-opacity-90"}
          borderColor={"border-gray-700"}
          size={"text-sm md:text-lg"}
          linkTo={"/projects"}
        />
      </div>
    </div>
  );
}
