// app.js

const express = require('express');
const bloodRoutes = require('../routes/bloodroute');

const app = express();

app.use(express.json());

app.use('/blood', bloodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
