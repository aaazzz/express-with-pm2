const express = require('express');
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json(
    {
      message: 'hey',
      pid: process.pid
    }
  );
});


app.listen(8888);
console.log('http://localhost:8888!');
