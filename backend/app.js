const express = require('express');
const mongoose = require('mongoose');
const Medaillen = require('./medaillen');
// const path = require('path'); // brauch ich nur wenn ich pug direckt von hier aus rendern möchte

const app = express();
const port = 3000;


  
mongoose.connect('mongodb://mongodb:27017/TestDB', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Verbindungsfehler:'));
db.once('open', function() {
  console.log('Wir sind mit der MongoDB verbunden');
});


// app.use(express.static('public')); // brauch ich nur wenn ich pug direckt von hier aus rendern möchte
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, './public/views')); // brauch ich nur wenn ich pug direckt von hier aus rendern möchte


// app.get('/', async (req, res) => {
//     try {
//       const medaillen = await Medaillen.find();
//       res.render('index', { medaillen: medaillen });
//     } catch (err) {
//       res.status(500).send({ message: err.message });
//     }
//   });



// Middleware hinzufügen, um JSON zu analysieren
app.use(express.json());


// Route zum Abrufen von Daten wird ausgegeben vom frontend container der mit axios danach fragt 
app.get('/', async (req, res) => {
  try {
    const medaillen = await Medaillen.find();
    res.send(medaillen);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/about', async (req, res) => {
  try {
    const medaillen = await Medaillen.find();
    res.send(medaillen);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/contact', async (req, res) => {
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
