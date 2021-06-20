const express = require('express');
const { RandomBytes, randomBytes } = require('crypto');
const bodyParser = require("body-parser");
const app = express();

const restaurants = {};
app.use(bodyParser.json());
app.get("/restaurants", (req, res) => {
    res.send(restaurants);
});

app.post("/restaurants", (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body;
    restaurants[id] = {
        id, title
    };
    res.status(201).send(restaurants[id])
});


app.listen(4000, () => {
    console.log("Listening to 4000")
});