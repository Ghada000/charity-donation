// index.js
const express = require('express');
const app = express();


// const route1 = require("./routes/blood.js");
// const route2 = require("./routes/clothes.js");
const route3 = require("./routes/hair.js");
// const route4 = require("./routes/medicament.js");

// app.use("/blood", route1);
// app.use("/clothes", route2);
app.use("/hair", route3);
// app.use("/medicament", route4);

// Respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
