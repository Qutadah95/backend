'use strict';

const express = require('express') 
const app = express() 
const cors = require('cors');
const axios=require('axios');
// const fetch=require('node-fetch');
app.use(cors())
require('dotenv').config();
const PORT=process.env.PORT;
 const weather = require('./data/weather.json');
const { response } = require('express');
 
app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})

class Forecast {
constructor(data,description){
  this.data=data;
  this.description=description;
  
}
}
app.get('/weathered',   (req, res)=> { 
  // console.log(req.query.city_name);
  const city_name=req.query.city_name;
  const lat=req.query.lat;
  const lon=req.query.lon;




    const returnArray=weather.find((item)=>{
      return (item.city_name.toLowerCase()===city_name);
    });
    if(returnArray){
      const newArray=returnArray.data.map((item)=>{
        return new Forecast(item.datetime,item.weather.description);
      })
      res.json(newArray);
      console.log(newArray);
    }
    else{
      res.json('data not found');
    }console.log(returnArray);
 try {
  returnArray;
  newArray;
 } catch (error) {
  res.json('data not found');
 }

// const WEATHER_API_KEY=process.env.WEATHER_API_KEY;

// const weatherURL=`https://api.weatherbit.io/v2.0/forecast/daily`

  
//   try {
//     const weatherResponse= await axios.get(`${weatherURL}?lat=${lat}&lon=${lon}key=${WEATHER_API_KEY}`);
//     response.json(weatherResponse.data);
//   } catch (error) {
//     response.json(error.data)
//   }
 }),
app.get('/weather',  async (req, res)=> { 
  // const latlon=req.params.latlon.split('');
  // console.log(req.query.city_name);
  // const city_name=req.query.city_name;
  const lat=req.query.lat;
  const lon=req.query.lon;




    // const returnArray=weather.find((item)=>{
    //   return (item.city_name.toLowerCase()===city_name);
    // });
    // if(returnArray){
    //   const newArray=returnArray.data.map((item)=>{
    //     return new Forecast(item.datetime,item.weather.description);
    //   })
    //   res.json(newArray);
    //   console.log(newArray);
    // }
    // else{
    //   res.json('data not found');
    // }console.log(returnArray);
//  try {
//   returnArray;
//   newArray;
//  } catch (error) {
//   res.json('data not found');
//  }

const WEATHER_API_KEY=process.env.WEATHER_API_KEY;

const weatherURL=`https://api.weatherbit.io/v2.0/forecast/daily`

  
  try {
    const weatherResponse= await axios.get(`${weatherURL}?lat=${lat}&lon=${lon}key=${WEATHER_API_KEY}`);
    response.json(weatherResponse.data);
  } catch (error) {
    response.json(error.data)
  }
 }),
 
app.listen(PORT, () => {
  console.log(`Server started on port`);
});