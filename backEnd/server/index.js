

// index.js
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(express.json());


// Start the server







const medicamentRoutes = require('../routes/medicamentRoute');
const bloodRoutes = require('../routes/bloodroute');
const clothesRoutes = require('../routes/clothes.js');

app.use('/blood', bloodRoutes);
app.use('/clothes', clothesRoutes);
app.use('/medicaments', medicamentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
