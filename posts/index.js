const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const posts = {};
const cors = require('cors');
app.use(cors())
app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/posts', async (req, res) => {
    const uid = uuidv4();
    console.log(uid);
    const { title } = req.body;
    posts[uid] = {
        uid, title
    }
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: { uid, title }
    })
    res.status(201).send(posts[uid]);
});

app.post('/events', (req, res) => {
    console.log('Receiving the event', req.body.type)
    res.send({})
});

app.post('/posts/events', (req, res) => {
    console.log(res.body)
})

app.listen(4001, () => {
    console.log('POSTS: Listening on port 4001')
})