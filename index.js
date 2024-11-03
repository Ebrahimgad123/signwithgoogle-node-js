const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const Cors=require('cors')
require('dotenv').config();
require('./config/passport');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
}));
app.use(Cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(authRoutes);

app.get('/success', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('success-google', { user: req.user });
  } else {
    res.redirect('/auth/google');
  }
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});


