const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');

const app = express();

// Method1 Code here to load static content pages
// app.use(express.static(publicPath));

// Method 2 display page without file extension

app.get('', (requ, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (requ, resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('*', (requ, resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4200);