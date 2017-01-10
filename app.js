'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV;
const cookieSession = require('cookie-session')

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');


const dbase = require('./config/db.js')
console.log(dbase);

mongoose.Promise = Promise;
// mongoose.connect(db.url);




// Connection URL
var url = dbase.url;
// Use connect method to connect to the Server
mongoose.connect(url);

mongoose.connection.once('open', () =>{
    console.log('working, yo');
})





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
