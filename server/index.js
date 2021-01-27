const express = require('express');
const path = require('path');
const cors = require('cors')

const port = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors())

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });