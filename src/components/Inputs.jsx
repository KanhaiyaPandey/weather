/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { UilSearch} from '@iconscout/react-unicons'
import { useState } from 'react'
import getWeatherData from '../utils/constants';

const Inputs = ({weather, setWeather,setForecast}) => {
     const [search, setSearch] = useState("");
     const handleSearch = async () =>{
           const data = await getWeatherData('weather',{q: search});
           setWeather(data);

           const forecastData = await getWeatherData('forecast',{q: search});
           setForecast(forecastData)
             
     }

  return (
    <div className='flex flex-col items-center justify-center my-6'>
    <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 lg:ml-[630px] space-y-2 lg:space-y-0 lg:space-x-2">
    <input type="text" placeholder="Search for city.."
      onChange={(e) => setSearch(e.target.value)}
       className="input input-bordered w-full max-w-xs" />
      <div className="flex flex-row space-x-4">
        <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearch} />
      </div>
    </div>
  </div>
  )
}

export default Inputs