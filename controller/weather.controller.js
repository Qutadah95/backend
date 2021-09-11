'use strict';

const axios = require('axios');
require('dotenv').config();

const Forecast = require('../models/weather.model');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const getWeather =  async (req, res) => {
  const city_name = req.query.city;
  
console.log(city_name,'city');


  const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily`;


try {
  const weatherResponse = await axios.get(`${weatherURL}?city=${city_name}&key=${WEATHER_API_KEY}`);

  const data = weatherResponse.data.data.map((data1) => {

    return new Forecast(
      data1.low_temp,data1.high_temp,data1.weather.description,data1.datetime
     
    );
  });

  res.json(data);
  console.log(data,'data');
} catch (error) {
  
  res.json(error.data);
}

  

  

  
};

module.exports = getWeather;