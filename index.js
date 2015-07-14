var express = require('express');
var app = express();
var main = require('./app/controllers/main');

// Use static files
app.use(express.static('./public'));

// Set views folder
app.set('views', './app/views');

// Set views engine to use
app.set('view engine', 'jade');
// Routes
app.use('/', main);

var server = app.listen( process.env.PORT || 3001, function() {

});

// Handle 404
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
