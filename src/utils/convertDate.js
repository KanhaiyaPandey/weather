const timestamp = 1701860792;

const milliseconds = timestamp * 1000;


const date = new Date(milliseconds);

const year = date.getUTCFullYear();
const month = date.getUTCMonth() + 1; 
const day = date.getUTCDate();
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const seconds = date.getUTCSeconds();

// Format the date as a string
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDate);


export const formateTime = (time, timeZone) =>{

    const sunriseDateUTC = new Date(time * 1000);

    const sunriseDateLocal = new Date(sunriseDateUTC.getTime() + timeZone * 1000);

    const hoursLocal = sunriseDateLocal.getHours();
    const minutesLocal = sunriseDateLocal.getMinutes();
    const secondsLocal = sunriseDateLocal.getSeconds();

    const formattedHoursLocal = hoursLocal % 12 || 12;

    const formattedTime12HourLocal = `${formattedHoursLocal < 10 ? '0' : ''}${formattedHoursLocal-6}:${minutesLocal < 10 ? '0' : ''}${minutesLocal}:${secondsLocal < 10 ? '0' : ''}${secondsLocal}`;

    return formattedTime12HourLocal;

}