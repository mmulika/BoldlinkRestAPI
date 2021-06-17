'use strict'
const express = require('express')
const http = require('http')
const app = express()
var message = {
    'message':' Hello World'
}
var users = message
 
app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/', (req, res) => {
    res.status(200).send("HELLO WORLD")
})

http.createServer(app).listen(3000, () => {
    console.log('Hello World \nAPI REST run in http://localhost:3000')
})


