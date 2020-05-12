const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'))
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.put('/moreHomes', (req, res) => {
  console.log('init put request recieved')
  console.log(req.body.id)
})

app.listen(port, () => console.log(`Proxy listening at port ${port}`));