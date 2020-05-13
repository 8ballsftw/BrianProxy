const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware')
var proxy = require('express-http-proxy');

const app = express();
const port = 3000;

app.use(morgan('combined'))
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', proxy('http://localhost:3001'));
// app.use('/', proxy('http://localhost:3003'));
// app.use('/', proxy('http://localhost:3004'));

// app.use('/', createProxyMiddleware({target: 'http://localhost:3001'}))
// app.use('/', createProxyMiddleware({target: 'http://localhost:3003'}))
// app.use('/', createProxyMiddleware({target: 'http://localhost:3004'}))

// app.get(`/moreHomes/:idx`, (req, res) => {
//   console.log('init put request recieved')
//   console.log(req.params.idx)
//   // take req.params.idx -> send that to MoreHomes
// })

app.listen(port, () => console.log(`Proxy listening at port ${port}`));