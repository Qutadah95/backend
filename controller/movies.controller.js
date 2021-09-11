'use strict';

const axios = require('axios');
require('dotenv').config();
const MOVIES_API_KEY = process.env.MOVIES_API_KEY;
const Movie = require('../models/movies.model');


  const getMovie=  async (request, response) => {
    
    const city_name = request.query.query;
  // console.log(city_name);
    const movieurl = "https://api.themoviedb.org/3/search/movie";
    console.log(movieurl);
    const movieResponse = await axios.get(
      `${movieurl}?query=${city_name}&api_key=${MOVIES_API_KEY}`
    );
    console.log(movieResponse.data.results[0].title);

  
    
    
     
      let arr1 = movieResponse.data.results.map((data1) => {
        return new Movie(
    
          `Title: ${data1.title}`,
          `Overview: ${data1.overview}`,
          `Average votes: ${data1.vote_average}`,
          ` Total Votes: ${data1.vote_count}`,
          `${data1.poster_path}`,
          `popularity:${data1.popularity}`,
          `release_date:${data1.release_date}`
  
        );
      });    

      console.log(arr1,'data');
      if (arr1.length) {
        response.json(arr1);
        
      } else {
        response.send("error: Something went wrong.");
      }
     
  };
 
 


  

  module.exports = getMovie;