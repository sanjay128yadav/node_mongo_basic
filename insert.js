const dbConnect = require('./mongodb');

const insertData = async ()=>{

    const db = await dbConnect();

    //const data = await db.find().toArray();
    //console.log('Insert Data Function:', data);

    /* const result = await db.insertOne({
        name: 'Note Max',
        brand: 'Vivo',
        price: 10000,
        category: 'Mobile'
    }); */

    const result = await db.insertMany(
        [
            {  name: 'Note Max1', brand: 'Vivo', price: 10500, category: 'Mobile' },
            {  name: 'Note Max2', brand: 'Vivo', price: 11000, category: 'Mobile' },
            {  name: 'Note Max3', brand: 'Vivo', price: 12000, category: 'Mobile' }
        ]
    );

    //console.log(result);

    if (result.acknowledged) {
        console.log('Data Inserted: ', result);
    }
}

insertData();