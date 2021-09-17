import React from "react";
import { useInView } from "react-intersection-observer";
import ButtonLink from "./ButtonLink";

export default function Service({
  image,
  direction,
  textMargin,
  order,
  border,
  ...props
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      className={`grid ${border} pb-8 lg:grid-cols-2 sm:gap-6 my-8 md:mt-20 md:my-20 lg:pt-10 lg:pb-20`}
    >
      <div className={`${textMargin} col-span-1`}>
        <h4 className="text-3xl md:text-4xl font-thin pt-10 mb-2 md:pt-0 md:mb-4">
          Title
        </h4>
        <h5 className="text-xl md:text-2xl font-semibold mb-2">
          Subtitle and description
        </h5>
        <p className="text-base md:text-lg mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
          autem repellendus esse. Laudantium inventore doloribus eveniet.
          Reprehenderit, ipsa. Earum, incidunt. Suscipit quam inventore, rerum
          soluta consectetur nisi vitae cum nemo voluptatem.
        </p>
        <p className="text-base md:text-lg mb-2">
          Saepe neque quasi consequatur, nostrum sint cupiditate tempora eius
          dignissimos, suscipit laboriosam consequuntur debitis dolore
          reprehenderit, illo inventore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse ad eaque sapiente ea ratione fugit delectus
          earum blanditiis officia optio?
        </p>
        <p className="text-base md:text-lg mb-2">
          Saepe neque quasi consequatur, nostrum sint cupiditate tempora eius
          dignissimos, suscipit laboriosam consequuntur debitis dolore
          reprehenderit, illo inventore. Lorem ipsum dolor sit amet.
        </p>
        <div className="my-6">
          <ButtonLink
            content="learn more"
            bgColor={"bg-yellow-700 lg:bg-opacity-90"}
            borderColor={"border-yellow-700"}
            size={"text-sm md:text-lg"}
          />
        </div>
      </div>
      <div className={`col-span-1 pt-10 sm:pt-0 ${order}`}>
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
