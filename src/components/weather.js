import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const weatherCard = ({weatherData}) => (
    <div className="container">
    <Card id="weather-card">
        <Card.Body>
            <Card.Title><p className="city" id="weather-info">{weatherData.name}</p></Card.Title>
            <p className="temp" id="weather-info">{Math.round(weatherData.main.temp)}&deg;F</p>
            <p className="description" id="weather-info">{weatherData.weather[0].main}</p>
            <div className="row-1">
                <p className="high-temp" id="weather-info"><span>H: </span>{Math.round(weatherData.main.temp_max)}&deg;</p>
                <p className="low-temp" id="weather-info"><span>L: </span>{Math.round(weatherData.main.temp_min)}&deg;</p>
            </div>
            <hr></hr>
            <div className="row-2">
                <p className="s-rise" id="weather-info"><span id="stack-info">SUNRISE</span>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                <p className="real-feel" id="weather-info"><span id="stack-info">FEELS LIKE</span>{Math.round(weatherData.main.feels_like)}&deg;F</p>
            </div>
            <hr></hr>
            <div className="row-3">
                <p className="s-set" id="weather-info"><span id="stack-info">SUNSET</span>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                <p className="humid" id="weather-info"><span id="stack-info">HUMIDITY</span>{weatherData.main.humidity}%</p>
            </div>
            <hr></hr>
            <div className="row-4">
                <p className="wind" id="weather-info"><span id="stack-info">WIND</span>{Math.round(weatherData.wind.speed)} mph</p>
                <p className="visible" id="weather-info"><span id="stack-info">VISIBILITY</span>{weatherData.visibility} yd</p>
            </div>
            <hr></hr>
            <div className="row-5">
                <p className="pressure" id="weather-info"><span id="stack-info">PRESSURE</span>{weatherData.main.pressure} inHg</p>
                <p className="description" id="weather-info"><span id="stack-info">DESCRIPTION</span>{weatherData.weather[0].description}</p>
            </div>
            <p className="date" id="weather-info">{moment().format('LLLL')}</p>
        </Card.Body>
    </Card>
    </div>
  )
  
  export default weatherCard;