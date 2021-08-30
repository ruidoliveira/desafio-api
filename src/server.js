const express = require('express');
const routes = require('./routers/routes');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);

module.exports = app;