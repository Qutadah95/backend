'use strict';

const axios = require('axios');
require('dotenv').config();
const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

  const Movie= app.get("/movies", async (request, response) => {
    
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

  module.exports = Movie;