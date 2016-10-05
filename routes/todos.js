/**
 * Created by oem on 2016-10-05.
 */
/**
 * Created by oem on 2016-10-05.
 */

var express = require('express');
var router  = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds049476.mlab.com:49476/meantodos_slawek0102',['todos'])


//Get ToDos

router.get('/todos', function (req, res, next) {
  db.todos.find(function (err, todos) {
    if (err){
      res.send(err);
    } else {
      res.json(todos);
    }
  })
});

//Get Todo

router.get('/todo/:id', function (req, res, next) {
  db.todos.findOne({

  },function (err, todos) {
    if (err){
      res.send(err);
    } else {
      res.json(todos);
    }
  })
});


module.exports = router;
