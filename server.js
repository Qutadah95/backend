'use strict';

const express = require('express')
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
const weather = require('./data/weather.json');
const { response } = require('express');

app.get('/',
  function (req, res) {
    res.send('Hello World')
  })

class Forecast {
  constructor(data, description) {
    this.data = data;
    this.description = description;

  }
}
class Movie {
  constructor(title, overview, vote, count, img,popularity,release_date) {
    this.title = title;
    this.overview = overview;
    this.vote = vote;
    this.count = count;
    this.img = img;
    this.popularity=popularity;
    this.release_date=release_date;
  }
}
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
app.get('/weather', async (req, res) => {
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
  
  
  const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

  app.get("/movies", async (request, response) => {
    
    const city_name = request.query.query;
  
    const movie = "https://api.themoviedb.org/3/search/movie";
    const movieResponse = await axios.get(
      `${movie}?query=${city_name}&api_key=${MOVIES_API_KEY}`
    );
  
    
    if (city_name) {
     
      let arr1 = movieResponse.data.results.map((data1) => {
        console.log(data1);
        return new Moovies(
          `Title: ${data1.title}`,
          `Overview: ${data1.overview}`,
          `Average votes: ${data1.vote_average}`,
          ` Total Votes: ${data1.vote_count}`,
          `${data1.poster_path}`,
          `popularity:${data1.popularity}`,
          `release_date:${data1.release_date}`
  
        );
      });
  
      if (arr1.length) {
        response.json(arr1);
      } else {
        response.send("error: Something went wrong.");
      }
    } else {
      response.json("error: Something went wrong.");
    }
  });
  app.listen(PORT, () => {
    console.log(`Server started on port`);
  });


  app.get("/movies", async (request, response) => {
    
    const city_name = request.query.query;
  
   
    const movie = "https://api.themoviedb.org/3/search/movie";
    const movieResponse = await axios.get(
      `${movie}?query=${city_name}&api_key=${MOVIES_API_KEY}`
    );
  
   
    if (city_name) {
    
      let arr1 = movieResponse.data.results.map((data) => {
        console.log(data);
        return new Movie(
          `Title: ${data.title}`,
          `Overview: ${data.overview}`,
          `Average votes: ${data.vote_average}`,
          ` Total Votes: ${data.vote_count}`,
          `${data.poster_path}`,
          `popularity:${data.popularity}`,
          `release_date:${data.release_date}`
  
        );
      });
  
      if (arr1.length) {
        response.json(arr1);
      } else {
        response.send("error: Something went wrong.");
      }
    } else {
      response.json("error: Something went wrong.");
    }
  });
  
  let port = process.env.PORT || 3020;
  app.listen(port, () => {});