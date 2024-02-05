// app.js

const express = require('express');

const app = express();

app.use(express.json());

const bloodRoutes = require('../routes/bloodroute');
const clothesRoutes = require('../routes/clothes.js');

app.use('/blood', bloodRoutes);
app.use('/clothes', clothesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
