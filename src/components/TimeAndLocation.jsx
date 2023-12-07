/* eslint-disable react/prop-types */


const TimeAndLocation = ({weather}) => {


  const timestamp = weather?.dt;

const milliseconds = timestamp * 1000;


const date = new Date(milliseconds);

const year = date.getUTCFullYear();
const month = date.getUTCMonth() + 1; 
const day = date.getUTCDate();
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const seconds = date.getUTCSeconds();

const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
const formatedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="">
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                {/* Tuesday, 31st May 2023 | Local time: 12:36 PM */}
                {formattedDate+ " | Local time "+ formatedTime}
            </p>
        </div>
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">{weather?.name}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation