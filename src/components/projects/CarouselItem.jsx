import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../utilities/scrollToTop";

export default function CarouselItem({
  content,
  id,
  image,
  ...props
}) {
  
  return (
    <Link name={content} alt={content} to={`/projects/${id}`} onClick={scrollToTop} className="lg:mx-4 w-full cursor-pointer">
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex-col p-2">
          <div className="relative">
            <img
              alt={content}
              src={image}
              className="object-cover w-full h-56 rounded-lg"
            />
            <div>
            <div className="absolute w-full h-1/4 bg-gray-700 bottom-0 opacity-80 rounded-b-lg">
            </div>
              <div className="absolute bottom-0 p-4 text-white rounded-b-lg">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
