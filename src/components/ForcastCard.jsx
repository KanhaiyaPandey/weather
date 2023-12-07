/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import sun from "../assets/sun.svg"

const ForcastCard = ({data}) => {

    const timestamp = data?.dt;
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; 
    const day = date.getUTCDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    const convertTemp = (tempInKelvin) =>{
        const kelvinTemp = 273;
    const temperatureCelsius =  tempInKelvin - kelvinTemp;
    return temperatureCelsius.toFixed(2);
    }

  return (
    <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                   {data?.dt_txt}
                </p>
                <img src= { `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt=""
                className="w-12 my-1" />
                <p className="font-medium mb-6 mt-2">{convertTemp(data?.main?.temp_max)}</p>
                <p className="font-medium mb-6">{convertTemp(data?.main?.feels_like)}</p>
                <p className="font-medium mb-6">{convertTemp(data?.main?.temp_min)}</p>
            </div>
  )
}

export default ForcastCard