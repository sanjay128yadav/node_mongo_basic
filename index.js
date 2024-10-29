const express = require('express');

require('./config');

const Product = require('./product');

const app = express();

app.use(express.json());

app.post('/create', async(req, resp) => {  
    
    let data = new Product(req.body);
    let result  = await data.save();
    resp.send(result);
});

app.get('/list', async(req, resp)=>{
    let data = await Product.find();
    resp.send(data);
});

app.delete('/delete/:_id', async(req, resp)=>{   
    let result = await Product.deleteOne(req.params);
    resp.send(result);
});

app.put('/update/:_id', async(req, resp)=>{   
    let result = await Product.updateOne(req.params, {$set: req.body});
    resp.send(result);
});



app.listen(4500);