const express = require('express');
const bloodRoutes = require('../routes/bloodroute');
const clothesRoutes = require('../routes/clothes.js');
const medicamentRoutes = require('../routes/medicamentRoute');
const hairRoutes = require("../routes/hair.js");
const userRoutes = require('../routes/userRoutes');
const campaignRoutes = require('../routes/campaignroute.js');
const donationRoutes = require('../routes/donationroute.js');
const cors = require('cors');
const app = express();

app.use(express.json()); // Using express.json() for parsing JSON requests
app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use('/blood', bloodRoutes);
app.use('/clothes', clothesRoutes);
app.use('/medicaments', medicamentRoutes);
app.use('/hair', hairRoutes);
app.use('/api', userRoutes); // Use user routes
app.use('/api/campaigns', campaignRoutes);
app.use('/api/donations', donationRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
