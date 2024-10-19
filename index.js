const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');

const app = express();

// code for set templete engine

app.set('view engine', 'ejs');

// Method1 Code here to load static content pages
 app.use(express.static(publicPath));

// Method 2 display page without file extension

app.get('', (requ, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (requ, resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/profile', (requ, resp)=>{

    const userdata = [
        {name:'Sanjay Yadav', age:43},
        {name:'Manoj Yadav', age:33},
    ]

    const user = { 
        name: 'Sanjay yadav',
        age: '42',
        skills: ['Node', 'php', 'python']
    }

    resp.render('profile' , {user});
});

app.get('/login', (req, resp)=>{
    resp.render('login');
});

app.get('*', (requ, resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4200);