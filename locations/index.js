const express = require('express');
const { RandomBytes, randomBytes } = require('crypto');
const bodyParser = require("body-parser");
const app = express();

const locationsByrestaurantsId = {};
app.use(bodyParser.json());
app.get("/restaurants/:id/locations", (req, res) => {
    res.send(locationsByrestaurantsId[req.params.id] || [])
});

app.post("/restaurants/:id/locations", (req, res) => {
    const locationsId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const locations = locationsByrestaurantsId[req.params.id] || []

    locations.push({ id: locationsId, content })
    locationsByrestaurantsId[req.params.id] = locations
    res.status(201).send(locations)
});

app.listen(5000, () => {
    console.log("Listening to 5000")
});