var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//var DB = require('./modules/db-manager.js');
/*
var config = require('getconfig');
var logger = require('morgan');
var favicon = require('express-favicon');
var session = require('express-session');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

var authentication = require('./authentication/passport');
var i18n = require('i18n');

GLOBAL.i18n = i18n;
i18n.configure({
  locales: config.locales,
  defaultLocale: config.defaultLocale,
  cookie: 'avnode',
  directory: __dirname + '/locales',
  register: global
});
 */

module.exports = function(app, exp) {
  app.engine('pug', require('pug').__express);
  app.set('views', app.root + '/app/views');
  app.set('view engine', 'pug')
  /*
  // In development, we don't need that…
  if (process.env.NODE_ENV === 'staging' ||
    process.env.NODE_ENV === 'production') {
    app.use(logger('combined'));
  }

   app.use(favicon(__dirname + '/../public/img/favicon.ico'));

  app.use(i18n.init);
  app.set('port', config.port);
  app.locals.pretty = true;
  // FIXME: Only some config options should be global…
  app.locals.config = {
    lang: config.lang,
    sections: config.sections,
    siteurl: config.siteurl,
    locales: config.locales,
    locales_labels: config.locales_labels
  };
  app.use(cookieParser());
  */
  app.use(bodyParser.json({limit: 100000}));
  app.use(bodyParser.urlencoded({parameterLimit: 30000000000, limit: 100000, extended: true }));
  app.use(methodOverride());
  /*
  app.use(session({
    secret: 'avnode',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  }));

  app.use(require('stylus').middleware({ src: './app/public' }));
  app.use(exp.static('./app/public'));
   */
  app.use(exp.static('./bower_components'));
  app.use(exp.static('./public'));
};
