import React from "react";
import Button from "./Button";
import moodboard from "../assets/images/moodboard.jpg";
import paintbrush from "../assets/images/paintbrush.jpg";
import stairs from "../assets/images/stairs.jpg";
import { useInView } from "react-intersection-observer";

export default function Services({ ...props }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="bg-yellow-50 px-4 md:px-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-10 px-6 md:py-20">
        <h3 className="text-3xl md:text-5xl font-thin border-b-2 border-gray-700 pb-3 md:pb-4">
          Our Services
        </h3>

        <div className="grid md:grid-cols-2 gap-6 md:mt-20 mb-10 md:my-20">
          <div className="col-span-1 md:mr-20">
            <h4 className="text-3xl md:text-4xl font-thin pt-10 mb-2 md:pt-0 md:mb-4">
              Title
            </h4>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">
              Subtitle and description
            </h5>
            <p className="text-base md:text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              placeat autem repellendus esse. Laudantium inventore doloribus
              eveniet. Reprehenderit, ipsa. Earum, incidunt. Suscipit quam
              inventore, rerum soluta consectetur nisi vitae cum nemo
              voluptatem.
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse ad eaque sapiente ea ratione
              fugit delectus earum blanditiis officia optio?
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet.
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-1 order-first pt-10 md:pt-0 md:order-last">
            <div
              ref={ref}
              className={`${
                !inView &&
                "md:inset-0 md:transform md:translate-x-full md:opacity-0"
              } 
          mb-4 transform translate-x-0 transition-transform duration-1000 ease-out`}
            >
              <img
                src={moodboard}
                alt="moodboard"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:mt-20 mb-10 md:my-20">
          <div className="col-span-1 md:ml-20">
            <h4 className="text-3xl md:text-4xl font-thin pt-10 mb-2 md:pt-0 md:mb-4">
              Title
            </h4>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">
              Subtitle and description
            </h5>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse ad eaque sapiente ea ratione
              fugit delectus earum blanditiis officia optio?
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos.
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-1 order-first pt-10 md:pt-0">
            <div
              ref={ref1}
              className={`${
                !inView1 &&
                "md:inset-0 md:transform md:-translate-x-full md:opacity-0"
              } 
          mb-4 transform translate-x-0 transition-transform duration-1000 ease-out`}
            >
              <img
                src={paintbrush}
                alt="paintbrush"
                className="w-full object-cover block"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:mt-20 mb-10 md:my-20">
          <div className="col-span-1 md:mr-20">
            <h4 className="text-3xl md:text-4xl font-thin pt-10 mb-2 md:pt-0 md:mb-4">
              Title
            </h4>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">
              Subtitle and description
            </h5>
            <p className="text-base md:text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              placeat autem repellendus esse. Laudantium inventore doloribus
              eveniet. Reprehenderit, ipsa. Earum, incidunt. Suscipit quam
              inventore, rerum soluta consectetur nisi vitae cum nemo
              voluptatem.
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse ad eaque sapiente ea ratione
              fugit delectus earum blanditiis officia optio?
            </p>
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet.
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-1 order-first pt-10 md:pt-0 md:order-last">
            <div
              ref={ref2}
              className={`${
                !inView2 &&
                "md:inset-0 md:transform md:translate-x-full md:opacity-0"
              } 
          mb-4 transform translate-x-0 transition-transform duration-1000 ease-out`}
            >
              <img src={stairs} alt="stairs" className="w-full object-cover " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
