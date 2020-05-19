const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = 3000;

// app.use(morgan('combined'))
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// app.use('/', proxy('http://localhost:3001'));
// app.use('/', proxy('http://localhost:3003'));
// app.use('/', proxy('http://localhost:3004'));

// app.use('/', createProxyMiddleware({target: 'http://localhost:3001'}))
// app.use('/', createProxyMiddleware({target: 'http://localhost:3003'}))
// app.use('/', createProxyMiddleware({target: 'http://localhost:3004'}))

app.get(`/moreHomes/:idx`, (req, res) => {
  console.log('init put request recieved');
  console.log(req.params.idx);
  axios.get(`http://52.70.48.13:3004/moreHomes/${req.params.idx}`, (err, succ) => {
    console.log(err)
    if (err) {
      // console.log(err)
    } else {
      console.log(succ);
      // res.send(succ);
    }
  })
  // take req.params.idx -> send that to MoreHomes
})

app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => console.log(`Proxy listening at port ${port}`));