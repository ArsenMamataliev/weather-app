import React, { useState, useEffect, Suspense} from 'react';
import InputFields from './components/InputFields';
import Loading from './components/loading/Loading';
const WeatherTable = React.lazy(() => import('./components/WeatherTable'));



function App() {
  const [city, setCity] = useState('osh');
  const [weatherData, setWeatherData] = useState([]);

<<<<<<< HEAD
  useEffect(()=>
  getWeatherInfo()
  , 
  [city]);
=======
  const getWeatherinfo = async() => {
    const response = await fetch(`https://api.weatherstack.com/current?access_key=03ab9d9afb9932b3bc2f396a113039c8&query=${city}, ${country}`);
    const weatherInfo = await response.json();
    setCurrent(weatherInfo.current);
    setRequest(weatherInfo.request);
    };

    function submitHandler(e) {
    e.preventDefault();
    if (city && country) {
      getWeatherinfo();
    }

  }
>>>>>>> c7871087a96a03bf8f4fa83a96898c22fd34eb6c

  const getWeatherInfo = async() => {
    const response = await fetch(`
    https://api.weatherbit.io/v2.0/current?city=${city}&country=Kyrgyzstan&state=${city}&key=473496066eff41f29580cae37f7bf178`);
    const weatherInfo = await response.json();
    setWeatherData(weatherInfo.data);
  };
          
  return (
    <div>
      <h1 style = {{color: 'white'}}>KGZ.Weather</h1>
      <InputFields  setCity = {setCity}/>
      <Suspense fallback = {<Loading/>}>
         <WeatherTable weatherData = {weatherData}/> 
      </Suspense>
    </div>
  );
}

export default App;
