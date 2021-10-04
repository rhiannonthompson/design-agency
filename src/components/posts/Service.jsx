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

  const btnContent = NAV_CONTENT.buttonLinks.more;

  return (
    <div
      className={`${border} section-grid`}
    >
      <div className={`${textMargin} col-span-1`}>
        <h4 className="section-title pt-10 mb-2 md:pt-0 md:mb-10">
          {title}
        </h4>
        <h5 className="section-subtitle mb-2 md:mb-4">
          {subtitle}
        </h5>
        {description.map((item) =>
           <p key={item.id} className="section-text mb-2">
             {item.content}
           </p>
        )}
       
        <div className="my-8">
          <ButtonLink
            content={btnContent}
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
          section-img`}
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