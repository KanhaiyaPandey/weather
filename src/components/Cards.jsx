/* eslint-disable react/prop-types */


const Cards = ({data}) => {

    const convertTemp = (tempInKelvin) =>{
        const kelvinTemp = 273;
    const temperatureCelsius =  tempInKelvin - kelvinTemp;
    return temperatureCelsius.toFixed(2);
    }


  return (
    <div className="card w-96 bg-base-100 bg-opacity-80 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
      <p className="font-light text-sm">
                   {data?.dt_txt}
                </p>
        <div className="mt-4">
          <p className="text-lg font-semibold">{convertTemp(data?.main?.temp_max)} °C</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">{convertTemp(data?.main?.temp_min)} °C</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">{data?.main?.humidity}%</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">{convertTemp(data?.main?.feels_like)} °C</p>
        </div>
      </div>
    </div>
  )
}

export default Cards