const express = require('express');
const app = express();
require('dotenv').config();
require('./conn')
const hbs = require('hbs')
const helpers = require('./helper');
app.use(express.urlencoded({ extended: true }));
const port= process.env.PORT || 3000;
const dataRoute = require('./dataRoute');
app.use('/api', dataRoute);

app.set('view engine', 'hbs');


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
