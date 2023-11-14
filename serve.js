//request to web framework
const express = require('express')

const app = express()

//request to database
const sql = require("mysql");

//know port
const port = 3306

//join json
app.use(express.json())

//connection to database




//get product
app.get('/list-product', (req, res)=> {
    res.send('hello world')
})

