// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Hot Restaurant Table (DATA)


const tables = [];
const waitlist = [];


// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// Displays tables on list
// app.get('/api/tables', (req, res) => {
//   const chosen = req.params.tables;

//   console.log(chosen);

//   for (let i = 0; i < tables.length; i++) {
//     if (chosen === tables[i].routeName) {
//       return res.json(tables[i]);
//     }
//   }

//   return res.json(false);
// });
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));


// Create New tables - takes in JSON input
app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user

  const newReservation = req.body;

  tables.push(newReservation);
  res.json(newReservation);
});

app.post('/api/waitlist', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user

  const newWaitlist = req.body;

  waitlist.push(newWaitlist);
  res.json(newWaitlist);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
