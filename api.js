const express   = require('express');
const dbConnect = require('./mongodb');
const mongodb   = require('mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let db      = await dbConnect();
    let data    = await db.find().toArray();
    resp.send(data);
});

app.post('/', async (req, resp)=>{
    let db      = await dbConnect();
    let result  = await db.insertOne(req.body);  
    resp.send(result);
});

app.put('/:name', async(req, resp)=>{
    let db      = await dbConnect();
    let result  = await db.updateOne({name:req.params.name},{$set: req.body});
    if(result.acknowledged) {
        resp.send(result);
    }    
});

app.delete('/:id', async(req, resp)=>{
    let db = await dbConnect();
    let result = await db.deleteOne({_id: new mongodb.ObjectId (req.params.id)});
    if(result.acknowledged) {
        resp.send(result);
    }

});


app.listen(4800);