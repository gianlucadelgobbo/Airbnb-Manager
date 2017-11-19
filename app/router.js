var indexRoutes = require('./routes/index');
module.exports = function(app) {
  app.get('/', indexRoutes.get);
  app.post('/', indexRoutes.post);
};
