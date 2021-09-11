'use strict';

// const weather = require('../data/weather.json');
const axios = require('axios');
require('dotenv').config();

const Forecast = require('../models/weather.model');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const getWeather =  async (req, res) => {
  const city_name = req.query.city_name;
  
// console.log(city_name);


  const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily`;

console.log(weatherURL);

try {
  const weatherResponse = await axios.get(`${weatherURL}?city=amman&key=${WEATHER_API_KEY}`);
  // console.log(weatherResponse);
  // response.json(weatherResponse.data);
  console.log(weatherResponse.data.data[0].low_temp,'data[0]');
  const data = weatherResponse.data.data.map((data1) => {

    return new Forecast(
      data1.low_temp,data1.high_temp,data1.weather.description,data1.datetime
      // `Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
      // ` ${data1.datetime}`
    );
  });
  // console.log(weatherResponse[0].data.data.weather,'hello');
  res.json(data);
  console.log(data,'data');
} catch (error) {
  
  res.json(error.data);
}

  

  

  
};

module.exports = getWeather;