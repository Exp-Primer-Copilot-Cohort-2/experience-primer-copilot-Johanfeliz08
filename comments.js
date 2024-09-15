// create web server
// 1. require express
// 2. create an express app
// 3. create a route to listen to GET requests to /comments
// 4. send back some hard-coded comments as JSON
// 5. listen on a port
// 6. log a message to the console when the server starts

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  const comments = [
    { username: 'Todd', comment: 'lololol' },
    { username: 'Skyler', comment: 'lmao' },
    { username: 'Sk8erBoi', comment: 'rofl' },
    { username: 'Katie', comment: 'haha' }
  ];

  res.json(comments);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

