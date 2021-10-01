import React from 'react'

export default function Section({heading, bgColor, ...props}) {
  return (
    <section className={`${bgColor} px-4 md:px-16 lg:px-0 overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto pt-14 px-6">
        <h3 className="h3">
          {heading}
        </h3>
        <div className="my-20">{props.children}</div>
      </div>
      </section>
  )
}

Section.defaultProps = {
  heading: "Section Heading",
  bgColor: "bg-yellow-50"
}