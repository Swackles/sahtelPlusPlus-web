const express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/auth', (req, res) => {
  require('./../api/auth')(req.body, (data, err) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    else res.send(data);
  });
});

module.exports = router;
