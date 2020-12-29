const express = require('express')
const app = express()

app.get('/api/v1/users', (req, res) => {
  res.json('{"message": "this will be user list"}')
})
console.log (process.env)
const port = 3000;
app.listen(port)
console.log("Listen on port: " + port);
