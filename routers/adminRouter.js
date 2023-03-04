const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');


const adminRouter = express.Router();

const uri = process.env.MONGO_URI;

const dbName = 'globomantics2';




adminRouter.route('/').get((req, res) => {



    (async function mongo() {
        try {
            console.log('This is admin router');
            client = await MongoClient.connect(uri);
            console.log('Connected to mongo DB');

        } catch (error) {
            console.log(error);
        }
    }());


})

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