const express = require('express');
const config = require('config');
const sahtelPlusPlus = require('../api/SahtelPlusPlus');
let router = express.Router();

/* GET home page. */
router.post('/', async (req, res, next) => {
    
    let data = {
        schedule: await sahtelPlusPlus.schedule(req.body),
    }

    res.render('schedule/table', {data: data});
});

module.exports = router;
