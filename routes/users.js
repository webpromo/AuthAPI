var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/Users.js');

/* GET SINGLE USER BY ID */
router.get('/auth:username', function(req, res, next) {
  Users.findById(req.params.username, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
