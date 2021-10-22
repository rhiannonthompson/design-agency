import React from 'react'
import ButtonLink from "../../components/common/ButtonLink";
import planningImage from "../../assets/images/planning.jpg";

export default function AboutText() {
  return (
    <div className="lg:flex lg:justify-between">
    <div className="mr-10 w-full lg:w-auto">
      <img className="rounded-sm" src={planningImage} alt={"planning session"}/>
    </div>
    <div className="mt-8 lg:mt-0">
        <p className="
      text-lg leading-7 tracking-wide mb-4 text-justify lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quod eos fuga a, quisquam amet cumque delectus dignissimos
        laboriosam pariatur at optio nemo cupiditate animi dolores! Cum illo
        eaque debitis nihil ab vitae deleniti illum. Dolorem eos,
        dignissimos, vero quasi eaque reprehenderit, quidem odio assumenda
        ducimus nam rerum voluptas animi?
      </p>
      <div className="w-full flex flex-row mt-8">
        <ButtonLink
          content={"contact us"}
          bgColor={"bg-yellow-800 lg:bg-opacity-90"}
          borderColor={"border-yellow-800"}
          size={"text-sm md:text-lg"}
          linkTo={"/contact"}
        />
        <div className="w-4" />

        <ButtonLink
          content={"Back"}
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
