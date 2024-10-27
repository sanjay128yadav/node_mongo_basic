const express = require('express');

const app = express();

app.get('', (req, resp) => {
    resp.send('Home page');
    resp.end();
});



app.listen(4500);