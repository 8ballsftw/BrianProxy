const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Proxy listening at port ${port}`));