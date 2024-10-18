const express = require('express');

const app = express();

app.get('', (req, resp) => {
    resp.send('Home page');
    resp.end();
});

app.get('/about', (req, resp) => {
    resp.send('This is about page. Your most welcome Mr.' + req.query.name);
    console.log('Data send through browser is:'+ req.query.name);
    resp.end();
});

app.listen(4500);