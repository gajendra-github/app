const express = require('express');
const app = express();
require("dotenv").config();
const adminRouter = require('./routers/adminRouter');


app.use('/admin', adminRouter);

app.get("/", (req, res) => {
    res.json({
        "state": "New York",
        "city": "New York City",
        "zip": 11377
    })
})

const PORT = process.env.PORT || 9696;

app.listen(PORT, () => console.log(` Server is listening to port ${PORT}`));

