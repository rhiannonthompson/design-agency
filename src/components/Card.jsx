import React from 'react'

export default function Card({img, title, ...props}) {
  return (
    <div className="w-full md:w-3/6 xl:w-4/12 px-2.5">
    <div className="bg-white shadow-md cursor-pointer">
      <div>
        <img src={img} alt="kitchen" className="w-full p-2.5 h-60 object-cover"/>
      </div>

      <div className="p-2.5">
        <ul>
          <li className="list-none mt-2 pb-1 border-b-2 border-gray-200">
              <span className="font-bold text-base">{title}</span>
          </li>
          <li className="list-done text-base pt-1 pb-4">
            <span>
              Short project description lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione harum natus quasi
              veritatis culpa libero delectus suscipit Ratione harum natus
              quasi veritatis culpa libero delectus...
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
