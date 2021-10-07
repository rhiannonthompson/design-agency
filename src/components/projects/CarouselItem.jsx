import React from "react";

export default function CarouselItem({bgColor, content, id, isHidden, ...props}) {
  
  return (
    <div className={isHidden ? `col-span-1 cursor-pointer hidden` : `col-span-1 cursor-pointer block`}>
      <div className={`p-24 ${bgColor}`}>
        <h5>{content}</h5>
      </div>
    </div>
  );
}
