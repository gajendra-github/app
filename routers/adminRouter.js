const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

console.log("This is admin router");


const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {

    async function connectToDatabase() {
        const uri = process.env.MONGODB_URI;
        console.log(uri);
        const client = new MongoClient(uri);
        console.log(client);

        try {
            console.log("sending request for database connection...");
            await client.connect();
            console.log("connected to database");

        } catch (error) {
            console.log(error.stack);

        }

    }

    //res.send('Lado...what the fuck');
})




// const uri = process.env.DATABASE;

// const dbName = 'gtmc';

// adminRouter.route('/').get((req, res) => {
//     (async function mongo() {
//         let client;

//         try {
//             console.log(uri);

//             client = await MongoClient.connect(uri);
//             console.log('Connected');
//             const db = client.db(dbName);
//             const response = await db.collection('sessions').insertMany({ "id": "1" });
//             res.json(response);


//         } catch (error) {
//             console.log('ERROR');
//             console.log(error);
//         }
//     }());


// })

// adminRouter.route('/').get((req, res) => {

//     (async function mongo() {
//         let client;
//         try {
//             client = await MongoClient.connect(uri);
//             console.log('Connected to mongo DB');

//             const db = client.db(dbName);
//             const response = await db.collection('sessions').insertMany({ "id": "1" });
//             res.json(response);
//         } catch (error) {
//             console.log(error);
//         }
//     }());
// })


module.exports = adminRouter;

/*
dbUser

CncaA8bZvpk2Lq2l

mongodb+srv://dbUser:CncaA8bZvpk2Lq2l@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority









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



mongodb+srv://dbUser:m8bYPccxSv2rfP71@mongodb.net?retryWrites=true&w=majority


*/