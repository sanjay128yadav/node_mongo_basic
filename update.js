const dbConnect = require('./mongodb');

const updateData = async ()=>{
    const db = await dbConnect();
    //console.log('Update data function', db);
    //let restult = await db.updateMany({brand:'One Pluse'}, {$set: {price:1450}});

    let restult = await db.updateOne({brand:'One Pluse'}, {$set: {price:2450}});

    if (restult.acknowledged) {
        console.log("Data update: ",restult);
    }
    
};

updateData();