var _h = require('../helpers');

exports.get = function get(req, res) {
  res.render('index', {
    title: 'Home Page',
    sez: 'home',
    result: {}
  });
};
exports.post = function post(req, res) {
  console.log("POST");
  console.log(req.body.input_url_path);
  var curl = require("curl")
  curl.get(req.body.input_url_path, {}, function(err, response, body) {
    res.render('index', {
      title: 'Home Page',
      sez: 'home',
      result: body
    });
    _h.parse(body);
    console.log(_h.parse(body));
  });
};
