'use strict';

const express = require('express') // require the express package
const app = express() 
const cors = require('cors');

app.use(cors())
 const weather = require('./data/weather.json')
 
app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})
app.get('/weather', 
 function (req, res) { 
  console.log(req.query.city_name);
  const type=req.query.city_name;

// const arrayofwether=weather.data[0]
console.log(type);
  if(type){

    const returnArray=weather[0].data.filter((item)=>{
      return item[0] === type;
    });
    if(returnArray.length){
      res.json(weather)
    }else{
      res.send('no data fond')
    }
  }else{
    res.json(weather) 
  }
  })
  


  
  
 
app.listen(3001, () => {
  console.log(`Server started on port`);
});