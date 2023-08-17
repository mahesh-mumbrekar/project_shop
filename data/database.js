const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    //const client = await MongoClient.connect('mongodb://localhost:27017');
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('online-shop');
}


function getdb() {
    console.log(database)
    //if (!database) {
      // throw new Error('You must connect first!');
   // }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getdb:getdb
}

