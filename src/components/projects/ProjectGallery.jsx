import React from "react";
import kitchenTable from "../../assets/images/kitchen-table.jpg";
import kitchenStoveTop from "../../assets/images/kitchen-stove-top.jpg";
import kitchenSetTable from "../../assets/images/kitchen-set-table.jpg";
import kitchenStorage from "../../assets/images/kitchen-storage.jpg";
import kitchenEatingTogether from "../../assets/images/kitchen-eating-together.jpg";
import kitchenPlants from "../../assets/images/kitchen-plants.jpg";
import kitchenBreakfastBar from "../../assets/images/kitchen-breakfast-bar.jpg";
import kitchenFood from "../../assets/images/kitchen-food.jpg";

export default function ProjectGallery() {
  return (
    <div className="grid mx-4 md:mx-8 lg:mx-32 rounded-lg gap-4 md:gap-6 md:grid-cols-7 md:grid-rows-8">
      <div className="md:col-span-3 md:row-span-2">
        <img
          className="object-cover w-full h-full rounded-lg border-white"
          src={kitchenTable}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-2 md:row-span-2">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenBreakfastBar}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-2 md:row-span-3">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenStorage}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-2 md:row-span-4">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenPlants}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-3 md:row-span-4">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenEatingTogether}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-2 md:row-span-3">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenStoveTop}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-4 md:row-span-2">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenSetTable}
          alt="kitchen table"
        />
      </div>
      <div className="md:col-span-3 md:row-span-2">
      <img
          className="object-cover w-full h-full rounded-lg"
          src={kitchenFood}
          alt="kitchen table"
        />
      </div>
    </div>
  );
}
