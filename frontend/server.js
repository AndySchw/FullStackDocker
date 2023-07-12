const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
  try {
    // Ändern Sie die URL nach Bedarf
    const response = await axios.get('http://app:3000');
    res.render('index', { medaillen: response.data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Frontend läuft auf Port 3000');
});
