//forever start -l forever.log -o out.log -e err.log  --debug -a app.js
/**
 * Node.js Airbnb-Manager
 * Author : Gianluca Del Gobbo, as Flyer communication, FLxER, Free Hardware Foundation and Linux Club
 * More Info : https://github.com/gianlucadelgobbo/Airbnb-Manager
 */

var exp = require('express');
var app = exp();

app.root = __dirname;
global.host = 'localhost';

//require('./app/setup')(app, exp);
//require('./app/server/router')(app);

app.listen(8033, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  var curl = require("curl")
  curl.get('https://www.airbnb.com/calendar/ical/3083211.ics?s=f66289ad82f1dc1193d89f4cbfd3f7ca', {}, function(err, response, body) {
    console.log(body);
  });


});

