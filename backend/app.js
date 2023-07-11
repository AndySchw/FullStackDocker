const express = require('express');
const mongoose = require('mongoose');
const Medaillen = require('./medaillen');

mongoose.connect('mongodb://mongodb:27017/TestDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Verbindungsfehler:'));
db.once('open', function() {
  console.log('Wir sind mit der MongoDB verbunden');
});

const app = express();
const port = 3000;

// Middleware hinzufügen, um JSON zu analysieren
app.use(express.json());

// Route zum Hinzufügen von Daten
app.post('/medaillen', async (req, res) => {
  const medaille = new Medaillen(req.body);

  try {
    await medaille.save();
    res.status(201).send(medaille);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Route zum Abrufen von Daten
app.get('/medaillen', async (req, res) => {
  try {
    const medaillen = await Medaillen.find();
    res.send(medaillen);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});