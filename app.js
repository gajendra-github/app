const express = require('express');
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.json({
        "state": "New York",
        "city": "New York City",
        "zip": 11377
    })
})

app.listen(process.env.PORT || 9696);

