const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes.js')

const app = express();

app.use(cors());
// importante estar no inicio pra tudo ja ser convertido em json
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;