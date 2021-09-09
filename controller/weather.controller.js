'use strict';

const weather = require('../data/weather.json');
const axios = require('axios');
require('dotenv').config();

const Forecast = require('../models/weather.model');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const getWeather =  async (req, res) => {
  const city_name = req.query.city_name;
  



  const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily`;



try {
  const weatherResponse = await axios.get(`${weatherURL}?city=${city_name}&key=${WEATHER_API_KEY}`);
  response.json(weatherResponse.data);
  const data = weatherResponse.data.data.map((data1) => {

    return new Forecast(
      `Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
      ` ${data1.datetime}`
    );
  });

  response.json(data);
} catch (error) {
  
  response.json(error.data);
}

  

  

  
};

module.exports = getWeather;