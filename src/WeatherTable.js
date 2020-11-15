import React from 'react';

const WeatherTable = (props) =>{
    return(
        <div>
            <h1>{props.request.query}</h1>
            <h4>{props.current.weather_descriptions}</h4>
            <p>{props.current.temperature}&#8451;</p>
            <img src={props.current.weather_icons} alt=""/>
        </div>
    )

};

export default WeatherTable;