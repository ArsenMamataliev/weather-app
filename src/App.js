import React, { useState, useEffect, Suspense} from 'react';
import InputFields from './components/InputFields';
import Loading from './components/loading/Loading';
const WeatherTable = React.lazy(() => import('./components/WeatherTable'));



function App() {
  const [city, setCity] = useState('osh');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(()=>
  getWeatherInfo()
  , 
  [city]);

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
