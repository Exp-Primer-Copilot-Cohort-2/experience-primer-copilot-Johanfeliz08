// Create web server
// Create a route for /comments
// When a GET request is made to /comments, send back a JSON response with all comments

const express = require('express');
const app = express();

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});