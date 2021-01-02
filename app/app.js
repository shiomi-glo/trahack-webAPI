const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = "app/db/database.sqlite3"

app.use(express.static(path.join(__dirname, 'public')))

// Get all users
app.get('/api/v1/users', (req, res) => {
  const db = new sqlite3.Database(dbPath)

  db.all('SELECT * FROM users', (err, rows) => {
    res.json(rows)
  })

  db.close()
})
// Get a user
app.get('/api/v1/users/:id', (req, res) => {
  const db = new sqlite3.Database(dbPath)
  const id = req.params.id

  db.get(`SELECT * FROM users WHERE id = ${id}`, (err, row) => {
    if (!row) {
      res.status(404).send({error: "Not Found!"})
    } else {
      res.status(200).json(row)
    }
  })

  db.close()
})

// Search users matching keyword
app.get('/api/v1/search', (req, res) => {
  const db = new sqlite3.Database(dbPath)
  const keyword = req.query.q

  db.all(`SELECT * FROM users WHERE name LIKE "%${keyword}%"`, (err, rows) => {
    res.json(rows)
  })

  db.close()
})

console.log (process.env)
const port = 3000;
app.listen(port)
console.log("Listen on port: " + port);
