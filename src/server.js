'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');

app.use(cors());
app.use(express.json());
app.use('/api', foodRouter);
app.use('/api', clothesRouter);

// errorHandlers go down

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on port ::', PORT);
    });
  },
};
