/* eslint-disable react/prop-types */

import ForcastCard from "./ForcastCard"

const Forecast = ({forecast}) => {

    const maxRenderCount = 5;
    let renderedCount = 0;

  return (
    <div>
        <div className="flex items-center justify-start mt-6">
         <p className="text-white font-medium uppercase">Daily forcast</p>
        </div>

        <hr className="my-2" />

        <div className="flex flex-row items-center justify-between text-white">
          

        {forecast?.list.map((item, index) => {
        if (index % 8 !== 0) {
          return null;
        }
        if (renderedCount < maxRenderCount) {
          renderedCount++;
          return (
              <ForcastCard key={index} data = {item}/> 
              
          );
        }
        return null;
      })}

        </div>
    </div>
  )
}

export default Forecast