const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require("./../api/tunniplaan")(null, (data, err) => {
    if (err) throw Error(err);
    else {
      res.render('index', { title: 'Tunniplaan', data: JSON.parse(data) });
    }
  });
});

module.exports = router;
