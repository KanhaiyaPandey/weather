/* eslint-disable no-unused-vars */
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./utils/constants";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import CardContainer from "./components/CardContainer";



const App = () => {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

 


  return (
    <div className="mx-auto max-w-full py-5 px-6 lg:px-32
     bg-gradient-to-br from-cyan-700 to-blue-400 shadow-xl
     shadow-gray-700 min-h-screen flex flex-col">
  <Inputs weather={weather} setWeather={setWeather} setForecast={setForecast} />
  <TimeAndLocation weather={weather} />
  <CardContainer forecast={forecast} />
</div>
  );
 
  };


export default App
