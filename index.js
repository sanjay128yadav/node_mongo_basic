const express       = require('express');
const EventEmitters = require("events");
const event         = new EventEmitters();

let count = 0;
event.on("countApi", ()=>{
    count ++;
    console.log("Event Called: ", count);
})

const app = express();

app.get('/', (req, resp) => {   
    resp.send("First API Called");
    event.emit("countApi");
});

app.get('/search', (req, resp) => {   
    resp.send("Search API Called");
    event.emit("countApi");
});

app.get('/update', (req, resp) => {   
    resp.send("Update API Called");
    event.emit("countApi");
});

app.listen(4500);