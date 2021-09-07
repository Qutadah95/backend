'use strict';

const express = require('express') // require the express package
const app = express() 
const cors = require('cors');

app.use(cors())
require('dotenv').config();
const PORT=process.env.PORT;
 const weather = require('./data/weather.json')
 
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

app.get('/weather', 
 function (req, res) { 
  console.log(req.query.city_name);
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
    }
 try {
  returnArray;
  newArray;
 } catch (error) {
  res.json('data not found');
 }



  
 }),
 
app.listen(PORT, () => {
  console.log(`Server started on port`);
});