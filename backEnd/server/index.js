// index.js
const express = require('express');
const bodyParser = require('body-parser');
const medicamentRoutes = require('../routes/medicamentRoute');

const app = express();
const PORT = 5000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Use the medicament routes
app.use('/medicaments', medicamentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
