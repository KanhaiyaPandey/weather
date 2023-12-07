/* eslint-disable react/prop-types */

import Cards from "./Cards";
import sun from "../assets/sun.svg";


const CardContainer = ({forecast}) => {

    const maxRenderCount = 5;
    let renderedCount = 0;

  return (
    <div className="flex space-x-4">

<div className="card w-96 bg-base-100 bg-opacity-80 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={sun} alt="Shoes" className="rounded-xl w-20" />
    </figure>
    <div className="card-body items-center text-center">
    <p className="font-light text-sm mt-4">Date</p>
      <div className="mt-2">
        <p className="text-sm font-semibold">High Temperature: </p>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold">Low Temperature: </p>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold">Humidity: </p>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold">Real Feel: </p>
      </div>
    </div>
  </div>

     {forecast?.list.map((item, index) => {
        if (index % 8 !== 0) {
          return null;
        }
        if (renderedCount < maxRenderCount) {
          renderedCount++;
          return (
              <Cards key={index} data = {item}/>         
          );
        }
        return null;
      })}
  </div>
  )
}

export default CardContainer