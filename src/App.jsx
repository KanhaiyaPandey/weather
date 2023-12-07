/* eslint-disable no-unused-vars */
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import { useState } from "react";
import CardContainer from "./components/CardContainer";
import EmptyPage from "./components/EmptyPage";



const App = () => {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();


  return (
    <div className="mx-auto max-w-full py-5 px-6 lg:px-32
    bg-custom-purple shadow-xl
     shadow-gray-700 min-h-screen flex flex-col overflow-hidden">
  {weather ? (
  <>
   <Inputs weather={weather} setWeather={setWeather} setForecast={setForecast} />
    <TimeAndLocation weather={weather} />
    <CardContainer forecast={forecast} />
  </>
) : (
  <>
    <Inputs weather={weather} setWeather={setWeather} setForecast={setForecast} />
    <EmptyPage />
    </>

)}


</div>
  );
  };


export default App
