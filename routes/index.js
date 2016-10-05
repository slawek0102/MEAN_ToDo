/**
 * Created by oem on 2016-10-05.
 */

var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.send('INDEX')
});

module.exports = router;
