

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const medicamentRoutes = require('../routes/medicamentRoute');

// app.js




const app = express();


// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Use the medicament routes
app.use('/medicaments', medicamentRoutes);

// Start the server






app.use(express.json());

const bloodRoutes = require('../routes/bloodroute');
const clothesRoutes = require('../routes/clothes.js');

app.use('/blood', bloodRoutes);
app.use('/clothes', clothesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
