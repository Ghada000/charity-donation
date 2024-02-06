const express = require('express');
const bodyParser = require('body-parser');







const app = express();


// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Use the medicament routes


// Start the server






app.use(express.json());

const bloodRoutes = require('../routes/bloodroute.js');
const clothesRoutes = require('../routes/clothes.js');
const medicamentRoutes = require('../routes/medicamentRoute');
const route3 = require("../routes/hair.js");

app.use('/blood', bloodRoutes);
app.use('/clothes', clothesRoutes);
app.use("/hair", route3);
app.use('/medicaments', medicamentRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});