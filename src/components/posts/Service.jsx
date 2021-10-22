import React from "react";
import { useInView } from "react-intersection-observer";
import ButtonLink from "../common/ButtonLink";
import moodboard from "../../assets/images/moodboard.jpg";
import NAV_CONTENT from "../../content/navContent";

export default function Service({
  id,
  image,
  title,
  subtitle,
  description,
  direction,
  textMargin,
  order,
  border,
  ...props
}) {
  
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });


  const content = NAV_CONTENT.buttonLinks.service;


  return (
    <div
      className={`${border} grid pb-8 lg:grid-cols-2 sm:gap-6 mt-10 md:mt-20 md:my-20 lg:pt-10 lg:pb-20`}
    >
      <div className={`${textMargin} col-span-1`}>
        <h4 className="text-2xl md:text-3xl font-light pt-8 mb-6 md:pt-0 md:mb-10">
          {title}
        </h4>
        <h5 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          {subtitle}
        </h5>
        {description.map((item) =>
           <p key={item.id} className="text-base md:text-lg mb-2 leading-6 tracking-wide">
             {item.content}
           </p>
        )}
       
        <div className="my-8">
          <ButtonLink
            content={`${content} ${id}`}
            linkTo={`/services/${id}`}
            bgColor={"bg-yellow-700 lg:bg-opacity-90"}
            borderColor={"border-yellow-700"}
            size={"text-sm md:text-lg"} 
          />
        </div>
      </div>
      <div className={`col-span-1 pt-6 sm:pt-0 ${order}`}>
        <div
          ref={ref}
          className={`${!inView && direction} 
          mb-4 transform translate-x-0 transition-transform duration-1000 ease-out`}
        >
          <img src={image} alt="moodboard" />
        </div>
      </div>
    </div>
  );
}

Service.defaultProps = {
  image: moodboard,
  title: "Title",
  subtitle: "Subtitle",
  direction: "lg:inset-0 lg:transform lg:translate-x-full lg:opacity-0",
  textMargin:"lg:mr-20",
  order:"order-first lg:order-last",
  border:"border-b-2", 
}