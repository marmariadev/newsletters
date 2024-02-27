const express = require('express');
const morgan = require('morgan');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', emailRoutes);

app.get('/', (req, res) => {
    res.send('Newsletter API');
});

module.exports = app;