const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const { v4: uuidv4 } = require('uuid');

const posts = {};
const cors = require('cors');
app.use(cors())
app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/posts', (req, res) => {
    const uid = uuidv4();
    console.log(uid);
    const { title } = req.body;
    posts[uid] = {
        uid, title
    }
    res.status(201).send(posts[uid])
});


app.listen(4001, () => {
    console.log('Listening on port 4001')
})