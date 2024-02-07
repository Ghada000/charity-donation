app.post('/api/saveImageUrl', (req, res) => {
    const { imageUrl } = req.body;
  
    database.saveImageUrl(imageUrl, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.sendStatus(200);
    });
  });
  
  app.get('/api/getImageUrl', (req, res) => {
    database.getImageUrl((err, imageUrl) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (!imageUrl) {
        res.status(404).json({ error: 'Image URL not found' });
        return;
      }
      res.json({ imageUrl });
    });
  })