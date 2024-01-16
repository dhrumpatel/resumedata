var express = require('express');
var router = express.Router();
const DATA = require('../model/data')

/* GET home page. */

router.get('/', async function (req, res, next) {
  try {
    const allResumeData = await DATA.find();

    res.render('index', { data: allResumeData });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
});



module.exports = router;
