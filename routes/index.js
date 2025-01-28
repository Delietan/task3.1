var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send(`
    <h2>Choose an option:</h2>
    <ul>
      <li><a href="/message">Welcome</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/random-number">Random Number</a></li>
    </ul>
  `);
});

router.get('/message', function(req, res, next) {
  res.send('Welcome');
});

router.get('/about', function(req, res, next) {
  res.send( 'My name is Martinus and this is a test project to play around with the functionality of Render.com' );
});

router.get('/random-number', function(req, res, next) {
  let randomNumber = Math.round(Math.random() * 10)
  res.send('Here is the random number you requested sir: ' + randomNumber );
});

module.exports = router;
