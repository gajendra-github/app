const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');


const adminRouter = express.Router();

const uri = process.env.MONGO_URI;

const dbName = 'globomantics2';

adminRouter.route('/').get((req, res) => {

    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            console.log('Connected to mongo DB');

            const db = client.db(dbName);
            const response = await db.collection('sessions').insertMany({ "id": "1" });
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }());
})


module.exports = adminRouter;

