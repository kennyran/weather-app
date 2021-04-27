import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CitySearch from './components/citysearch'
// import UseFetch from './components/useFetch'

function App() {
  // const {searchData, setUrl} = UseFetch();
  // console.log(searchData);
  //const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long]);

  return (
    <div className="App">
      <h1 id="title-header">Weather App</h1>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
