import React from 'react';

const WeatherTable = ({weatherData}) =>{
    return(
        <div>
            {weatherData.map(item =>(
                <div key = {item.vis}>
                 <h1>{item.city_name} {item.country_code}</h1>
                 <h1>{item.temp} &#8451;</h1>
                 <h4>{item.weather.description}</h4>
                 <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt="icon"/>
                 <p>latitude:<i>{item.lat}</i>  longitude:<i>{item.lon}</i></p>
                 </div>
            ))}
        </div>
    )

};

export default WeatherTable;