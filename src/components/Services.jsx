import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import moodboard from "../assets/images/moodboard.jpg";
import paintbrush from "../assets/images/paintbrush.jpg";
import stairs from "../assets/images/stairs.jpg";

export default function Services({ ...props }) {
  
  return (
    <section className="bg-yellow-50 px-4 md:px-0">
      <div className="max-w-7xl mx-auto py-10 px-6 md:py-20">
        <h3 className="text-3xl md:text-5xl font-thin border-b-2 border-gray-700 pb-3 md:pb-4">
          Our Services
        </h3>

        <div className="grid md:grid-cols-2 md:mt-20 mb-10 md:mb-32">
          <div className="col-span-1 md:mr-10">
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
            <p className="text-base md:text-lg mb-2">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore.
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-1 order-first pt-10 md:pt-0 md:order-last">
            <img
              src={moodboard}
              alt="moodboard"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:mt-20 mb-10 md:mb-32">
          <div className="col-span-1">
            <img src={paintbrush} alt="paintbrush" />
          </div>
          <div className="col-span-1 md:ml-10">
            <h4 className="text-3xl md:text-4xl font-thin pt-10 mb-2 md:pt-0 md:mb-4">
              Title
            </h4>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">
              Subtitle and description
            </h5>
            <p className="text-base md:text-lg mb-2 md:mr-10">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-base md:text-lg mb-2 md:mr-10">
              Saepe neque quasi consequatur, nostrum sint cupiditate tempora
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore.
            </p>
            <p className="text-base md:text-lg mb-2 md:mr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              provident. Provident sit corporis magnam iure!
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:mt-20 mb-10 md:mb-32 relative">
          <div className="col-span-1 md:mr-10">
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
              eius dignissimos, suscipit laboriosam consequuntur debitis dolore
              reprehenderit, illo inventore.
            </p>
            <div className="my-6">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-1 order-first md:pt-0 md:order-last relative">
            <div>
              <img src={stairs} alt="stairs" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
