require('express-async-errors')
require('@babel/register')

const express= require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = 3000;


const app = express();
const { sequelize } = require('./db/models');

const configSession = {
  name: 'Cookie',
  store: new FileStore(),
  secret: 'RickAndMorty',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 99999999,
    httpOnly: true,
  },
};

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session(configSession));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.listen(PORT, () => {
  sequelize
    .authenticate()
    .then(() => console.log('БД подключена!'))
    .catch((error) => console.log('ERROR DB==>', error));
  console.log('Start in ', PORT);
});


