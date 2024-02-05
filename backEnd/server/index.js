const express = require('express')
const app = express()


const route1 = require("../routes/blood.js");
const route2 = require("../routes/clothes.js");
const route3 = require("../routes/hair.js");
const route3 = require("../routes/medicament.js");
app.use("/blood", verifyToken, route1)
app.use("/clothes", route2)
app.use("/hair", route3)
app.use("/medicament", route3)



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})