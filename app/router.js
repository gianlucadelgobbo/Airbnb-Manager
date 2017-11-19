var indexRoutes = require('./routes/index');
module.exports = function(app) {
  app.get('/', indexRoutes.get);
  app.post('/parseCalendar', indexRoutes.post);
};
