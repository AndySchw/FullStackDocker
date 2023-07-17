const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');


app.set('view engine', 'pug');
app.set('views', './views');

app.use('/includes', express.static(path.join(__dirname, 'includes')));


app.get('/', async (req, res) => {
  try {
    // Ändern Sie die URL nach Bedarf
    const response = await axios.get('http://app:3000');
    res.render('index', { medaillen: response.data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/contact', async (req, res) => {
  try {
    // Ändern Sie die URL nach Bedarfe
    const response = await axios.get('http://app:3000');
    res.render('contact', { medaillen: response.data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/about', async (req, res) => {
  try {
    // Ändern Sie die URL nach Bedarf
    const response = await axios.get('http://app:3000');
    res.render('about', { medaillen: response.data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Frontend läuft auf Port 3000');
});
