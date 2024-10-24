const express = require('express');

const reqFilter = require('./middleware');

const route = express.Router();

const app = express();

// Code for call Middleware at Application level
//app.use(reqFilter);

route.use(reqFilter);

app.get('', (req, resp)=>{
    resp.send("Welcome to home page.");
});

route.get('/users', (req, resp)=>{
    resp.send("Welcome to users page.");
});

route.get('/about', reqFilter, (req, resp)=>{
    resp.send("Welcome to about page.");
});

route.get('/contact', reqFilter, (req, resp)=>{
    resp.send("Welcome to contact page.");
});

app.use('/', route);

app.listen(4500);