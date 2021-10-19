import React from "react";
import { useLocation } from "react-router";
import Carousel from "../components/projects/Carousel";
import ProjectDescription from "../components/projects/ProjectDescription";
import ProjectGallery from "../components/projects/ProjectGallery";

export default function SingleProjectPage({ ...props }) {
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.length - 1);

  return (
    <>
      <div className="flex-col align-center">
        <div className="max-w-7xl mx-auto pt-16 pb-8 md:py-16 px-6">
          <h3 className="text-3xl md:text-5xl font-thin border-b-2 border-gray-600 pb-4 md:py-6">{`Project ${id}`}</h3>
          <ProjectDescription />
        </div>
        <ProjectGallery />
        
        <div className="max-w-7xl mx-auto mt-16 lg:mt-28 px-6 lg:px-0">
          <h4 className="text-2xl md:text-3xl font-thin border-b-2 border-gray-600 pb-4 md:py-6 mb-20 lg:mb-28">
            Other Projects
          </h4>
          <Carousel />
          <div className="border-b-2 border-gray-600 md:py-6 mt-20 px-6 lg-px-0">
          </div>
        </div>
      </div>
   
     
    </>
  );
}
