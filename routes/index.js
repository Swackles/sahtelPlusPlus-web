const express = require('express');
const config = require('config');
const sahtelPlusPlus = require('../api/SahtelPlusPlus');
let router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  let data = {
    schedule: await sahtelPlusPlus.schedule(undefined),
    subject: await sahtelPlusPlus.subjects(),
    teacher: await sahtelPlusPlus.teachers(),
    room: await sahtelPlusPlus.rooms(),
    class: await sahtelPlusPlus.classes()
  }

  res.render('index', { title: 'Tunniplaan', data: data, AUTH_CLIENT_ID:  process.env.GOOGLE_TOKEN});
});

module.exports = router;
