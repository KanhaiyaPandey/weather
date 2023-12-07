/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import sun from "../assets/sun.svg";

import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"
import { formateTime } from "../utils/convertDate";

const TemperatureAndDetails = ({weather}) => {

    const convertTemp = (tempInKelvin) =>{
        const kelvinTemp = 273;
    const temperatureCelsius =  tempInKelvin - kelvinTemp;
    return temperatureCelsius.toFixed(2);
    }

  return (
    <div>
         <div className="flex items-center justify-center py-6 text-xl to-cyan-300">
        {weather?.weather[0]?.main}
    </div>

    <div className="flex flex-row items-center justify-between text-white px-24 ml-20 py-3">
        <img src= { `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" className="w-20" />
        <p className="text-5xl">{convertTemp(weather?.main?.temp)+ "°C"}</p>
    <div className="flex flex-col space-y-2 items-start">

        <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1"/>
            Real feel:
            <span className="font-medium ml-1">{convertTemp(weather?.main?.feels_like)}</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">{weather?.main?.humidity + "%"}</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"/>
            Wind speed:
            <span className="font-medium ml-1">{weather?.wind?.speed + " kmph"}</span>
        </div>

    </div>
    </div>

    <div className="flex flex-row items-center justify-center
    space-x-2 text-white text-sm py-3">
    
        <UilSun/>
        <p className="font-light">
            Rise: <span className="font-medium ml-1">{formateTime(weather?.sys?.sunrise, weather?.timezone) + " AM"}</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset/>
        <p className="font-light">
            Set: <span className="font-medium ml-1">{formateTime(weather?.sys?.sunset,  weather?.timezone) + " PM"}</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp/>
        <p className="font-light">
            High: <span className="font-medium ml-1">{convertTemp(weather?.main?.temp_max) + "°C"}</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown/>
        <p className="font-light">
            Low: <span className="font-medium ml-1">{convertTemp(weather?.main?.temp_min) + "°C"}</span>
        </p>
    </div>

    </div>
   
  )
}

export default TemperatureAndDetails