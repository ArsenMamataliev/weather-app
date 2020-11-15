import React, {useEffect, useState} from 'react';
import WeatherTable from './WeatherTable';

const styles = {
  h1:{
    color: 'white'
  },
  input: {
    width: '120px',
    border: "none",
    padding: '10px 20px',
    margin: '10px',
  },
  btn: {
    border: 'none',
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white'
  }
};


function App() {
  
  // States 
  const [current, setCurrent] = useState({});
  const [request, setRequest] = useState({});
  const [city, setCity] = useState('');
  const [country, setCountry] = useState(''); 

  const getWeather = async() => {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=03ab9d9afb9932b3bc2f396a113039c8&query=${city}, ${country}`);
    const weatherInfo = await response.json();
    setCurrent(weatherInfo.current);
    setRequest(weatherInfo.request);
    };

    function submitHandler(e) {
    e.preventDefault();
    if (city && country) {
      getWeather();
    }

  }

  return (
    <div >
      <h1 style = {styles.h1}>WWW.Weather</h1>
      <form onSubmit ={submitHandler}>
        <div>
            <input type="text" placeholder="City"  style = {styles.input} value = {city} onChange={e => setCity(e.target.value)}/>
            <input type="text" placeholder="Country" style = {styles.input} value = {country} onChange={e => setCountry(e.target.value)}/>
            <button type="submit" style = {styles.btn} > Search </button>
        </div>
        </form>
      <WeatherTable current = {current} request = {request} /> 
    </div>
  );
}

export default App;
