import React from 'react';
import ButtonLink from '../common/ButtonLink';
import kitchen from "../../assets/images/kitchen.jpg"
import NAV_CONTENT from '../../content/navContent';

export default function Card({ id, image, title, description, ...props }) {
  
  const content = NAV_CONTENT.buttonLinks.project;

  return (
    <div className="w-full">
    <div className="card">
      <div>
        <img src={image} alt="kitchen" className="card-img"/>
      </div> 
        <ul className="mb-6">
          <li className="pt-6 pb-2 border-b-2 border-gray-300">
              <span className="card-title">{title}</span>
          </li>
          <li>
            <div className="py-4 leading-6 tracking-wide">
              {description}
            </div>
          </li>
          </ul>
        <ButtonLink
            content={`${content} ${id}`}
            linkTo={`/projects/${id}`}
            bgColor={"bg-yellow-700 lg:bg-opacity-90"}
            borderColor={"border-yellow-700"}
            size={"text-xs md:text-base"}
          />
    </div>
  </div>
  )
}

Card.defaultProps = {
  image: kitchen,
  title: "Title",
  description: "Project description",
  btnContent: "learn more",
}