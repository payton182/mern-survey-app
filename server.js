const express = require('express');
const http = require('http');


const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);



app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
