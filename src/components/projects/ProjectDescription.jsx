import React from 'react'
import ButtonLink from "../common/ButtonLink"

export default function ProjectDescription() {
  return (
    <div className="my-8 md:mt-10 md:mb-4">
    <p className="text-lg leading-8 mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      laudantium fugit dolorum vero recusandae obcaecati aliquam illo! Sed
      natus delectus id exercitationem. Dolore, mollitia? Nihil rerum
      corporis aspernatur unde odio? Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Beatae aperiam numquam iure voluptas!
      Sunt accusamus inventore sint, cupiditate, eligendi ab labore iste
      iure perspiciatis vel necessitatibus natus officia? Incidunt numquam
      voluptatem voluptates error recusandae odit fugit voluptatum neque
      aut sunt amet nemo, quaerat id praesentium minus ducimus placeat
      inventore repellendus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit.
    </p>
    <p className="text-lg leading-8 mb-6">
      Recusandae rem odit quis consequuntur! Eveniet, enim ab accusamus
      eum ad voluptatem aliquam debitis magnam error id quam perspiciatis
      corrupti eaque nulla pariatur modi soluta repudiandae! Quidem, sed!
      Excepturi voluptate esse neque minima soluta doloremque tenetur aut
      provident! Cumque sequi voluptatem in. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis atque odit odio pariatur ducimus
      mollitia.
    </p>
    <div className="w-full flex flex-row">
      <ButtonLink
        content={"contact us"}
        bgColor={"bg-yellow-800 lg:bg-opacity-90"}
        borderColor={"border-yellow-800"}
        size={"text-sm md:text-lg"}
      />
      <div className="w-4"/>

      <ButtonLink
        content={"back"}
        bgColor={"bg-gray-800 lg:bg-opacity-90"}
        borderColor={"border-gray-700"}
        size={"text-sm md:text-lg"}
      />
    </div>
  </div>
  )
}
