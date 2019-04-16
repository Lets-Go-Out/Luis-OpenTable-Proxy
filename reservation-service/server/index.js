const express = require('express');
var proxy = require('express-http-proxy');
 
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const db = require('../database/Reservation.js');

const port = 3003;

app.use('/replace with your proxy', proxy('url'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get("/restaurants/:restaurantID/reservations", (req, res) => {
  db.find({ resId: req.params.restaurantID })
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.listen(port, () => {
  console.log("server is up listening on 3003!");
});
