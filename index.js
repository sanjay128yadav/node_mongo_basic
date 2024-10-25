
const dbConnect = require('./mongodb');

//const gg = dbConnect();
//console.log(gg);

// Method one handle promice using .then


/* dbConnect().then((resp)=>{
   const ts =  resp.find({name:'M-40'}).toArray().then((data)=>{
     console.log(data);
   })
}); */


// Method two handle promice using async & await

const main = async ()=>{
    let data = await dbConnect();
    data     = await data.find({name:'IPRO-40'}).toArray();
    console.log(data);
}

main();
