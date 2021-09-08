'use strict';

// Files requirement 

const axios = require('axios');
require('dotenv').config();

const Forecast = require('../models/weather.model');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const getWeather = app.get('/weather', async (req, res) => {
  const city_name = req.query.city_name;
  



  const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily`;





  const weatherResponse = await axios.get(`${weatherURL}?city=${city_name}&key=${WEATHER_API_KEY}`);
  response.json(weatherResponse.data);

  if (city_name) {
  
    let arr1 = weatherResponse.data.data.map((data1) => {

      return new Forecast(
        ` Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
        ` ${data1.datetime}`
      );
    });
    if (arr1.length) {
      response.json(arr1);
      console.log(arr1);
    } else {
      response.send("error: Something went wrong.");
    }
  } else {
    response.json("error: Something went wrong.");
  }

  
});

module.exports = getWeather;