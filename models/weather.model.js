'user strict';

 


class Forecast {
    constructor(low_temp,high_temp,description, data) {
      this.low_temp = low_temp;
      this.high_temp = high_temp;
      this.data = data;
      this.description = description;
  
    }
  }

module.exports = Forecast;