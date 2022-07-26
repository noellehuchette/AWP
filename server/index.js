const express = require('express');
const path = require('path');
const app = express();
const db = require('./db/db');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const PORT = 8080;

db.sync().then(function(){
    app.listen(PORT, () => console.log(`listening in at port ${PORT}`));
});



module.exports = app;
