const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


const commentsByPostUid = {}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostUid[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    const commentUid = uuidv4();
    const { content } = req.body;
    const comments = commentsByPostUid[req.params.id] || [];
    comments.push({ id: commentUid, content });
    commentsByPostUid[req.params.id] = comments;
    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: { commentUid, content, postId: req.params.id }
    })
    res.status(201).send(comments);
});

app.post('/events', (req, res) => {
    console.log('Receiving the event', req.body.type)
    res.send({})
});
app.listen(4000, () => {
    console.log("COMMENTS: Listening port 4000")
});
