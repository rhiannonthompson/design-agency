import React from 'react'
import ButtonLink from '../common/ButtonLink'

export default function ServiceInfo() {
  return (
    <div className="mt-8 lg:mt-0">
      <p className="text-lg leading-8 mb-4 text-justify lg:text-left">
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
          content={"All Services"}
          bgColor={"bg-gray-800 lg:bg-opacity-90"}
          borderColor={"border-gray-700"}
          size={"text-sm md:text-lg"}
          linkTo={"/services"}
        />
      </div>
    </div>
  )
}
