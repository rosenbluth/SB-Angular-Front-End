'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV;
const cookieSession = require('cookie-session')

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(methodOverride('_method'))

app.use(cookieSession({
    secret: 'alfred',
}));

app.use(express.static(__dirname + '/public'));

const routes = require('./routes');

app.get('/', function(req, res) {
    res.render('./public/index');
});

app.use('/', routes);


app.listen(PORT, function() {
    console.log('Hello from port:', PORT);
});

module.exports = app;
