import React from 'react'
import Kitchen from "../assets/images/kitchen.jpg";

export default function Cards({...props}) {
  return (
    <div>

      <div>
        <div>
          <img src={Kitchen} alt="kitchen"/>
        </div>

        <div>
          <ul>
            <li>
              <span>Project Title</span>
            </li>
            <li>
              <span>Short project description</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
