'use strict';

const express = require('express')
const app = express();
const cors = require('cors');
// const axios = require('axios');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;

const { response } = require('express');




const getWeather = require('./controller/weather.controller');
const Movie = require('./controller/movies.controller');
const index = require('./controller/index.controller');
  
app.get('/', index);
  app.get('/weather', getWeather);
  app.get('/movies', Movie);
  app.listen(PORT, () => {
    console.log(`Server started on port`);
  });