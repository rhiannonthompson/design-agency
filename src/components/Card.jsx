import React from 'react';
import ButtonLink from './ButtonLink';

export default function Card({ img, title, ...props }) {
  
  return (
    <div className="w-full">
    <div className="bg-white shadow-md p-6">
      <div>
        <img src={img} alt="kitchen" className="w-full h-60 object-cover"/>
      </div> 
        <ul className="mb-6">
          <li className="list-none pt-6 pb-2 border-b-2 border-gray-300">
              <span className="font-bold text-base lg:text-lg">{title}</span>
          </li>
          <li className="list-done text-base lg:h-24 overflow-hidden">
            <div>
              Short project description lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione harum natus quasi
              veritatis culpa libero delectus suscipis. Lorem ipsum dolor sit adipisicing elit. Repellendus velit atque accusantium molestias ipsa numquam iste, minima eos excepturi modi dolores suscipit minus commodi eligendi hic aliquid reiciendis veritatis fugit deserunt dolor, esse quas a saepe. Rerum accusantium ex sit aut nam, quidem autem?
            </div>
          </li>
          </ul>
          <ButtonLink
            content="learn more"
            bgColor={"bg-yellow-700 lg:bg-opacity-90"}
            borderColor={"border-yellow-700"}
            size={"text-xs md:text-base"}
          />
      
    </div>
  </div>
  )
}
