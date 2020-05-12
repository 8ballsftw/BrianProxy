const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = 3000;

// app.use('/static', express.static('public'))

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/index.html', (req, res) => res.status(200))


app.listen(port, () => console.log(`Proxy listening at port ${port}`));