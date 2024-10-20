const express = require('express');

const app = express();

const reqFilter = (req, resp, next)=>{
    
    if(!req.query.age){
        resp.send('Please enter age!');
    } else if(req.query.age < 18){
        resp.send('You can not access this page');
    } else {
        next(); 
    }
         
}

app.use(reqFilter);

app.get('', (req, resp)=>{
    resp.send("Welcome to home page.");
});

app.get('/users', (req, resp)=>{
    resp.send("Welcome to users page.");
});

app.listen(4500);