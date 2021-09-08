'use strict';


const index= app.get('/',
  function (req, res) {
    res.send('Hello World')
  })