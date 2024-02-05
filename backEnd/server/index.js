const express = require('express');
const clothesRoutes = require('../routes/clothes.js');

const app = express();

app.use(express.json());

app.use('/clothes', clothesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
