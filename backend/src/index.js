require('dotenv').config();
const request = require('request');
const express = require('express');
const cors = require('cors');

const cities = require('./cities');

const key = process.env.DARK_SKY_API_KEY;
const port = process.env.PORT || 4000;
const CITY_NAMES = Object.keys(cities);

const app = express();

app.use(cors({
  // dynamic CORS: parrot back the Origin header from the HTTP request
  origin: (origin, callback) => callback(null, true),
  credentials: true,
}));

app.get('/', (req, res) => {
  res.status(200).send('Things are working!');
});

app.listen(port, () =>
  console.log(`weather app backend running at http://localhost:${port}`));
