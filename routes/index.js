const express = require('express');
const config = require('config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require("./../api/tunniplaan")(null, (data, err) => {
    if (err) throw Error(err);
    else {
      res.render('index', { title: 'Tunniplaan', data: JSON.parse(data), AUTH_CLIENT_ID:  config.get('google.client_id')});
    }
  });
});

module.exports = router;
