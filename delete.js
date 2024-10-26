const dbConnect = require('./mongodb');

const deleteData = async()=>{

    let db = await dbConnect();
    let result = await db.deleteOne({name:'Node Pro 7g'});

    if(result.acknowledged) {
        console.log('Delete data function:: ', result);
    }    
}

deleteData();