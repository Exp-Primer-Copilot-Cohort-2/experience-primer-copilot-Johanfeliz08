// create web server
import express from 'express';
var app = express();

// create a route
app.get('/comments', function (req, res) {
    res.send('This is the comments page');
});

// start the server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

