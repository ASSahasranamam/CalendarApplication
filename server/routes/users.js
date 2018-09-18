var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var moment = require('moment')


var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    buddies: [String]
});

var user = mongoose.model('user', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {

  //res.send('respond with a resource');
  console.log("hello")

  console.log(req.body)
  //console.log(req)
  var newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: moment().format(),
        buddies: []
});

newUser.save(function(err) {
    if (err) throw err;

    console.log('user Saved');
    console.log(newUser);

});

res.send('Result')
});






module.exports = router;
