const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');

const app = express();

// Code here to load static content pages
app.use(express.static(publicPath));

app.listen(4200);