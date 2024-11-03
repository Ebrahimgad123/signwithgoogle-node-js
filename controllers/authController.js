const passport = require('passport');

const googleAuth = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
  };
  
  const googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', {
      successRedirect: '/success',
      failureRedirect: '/failure',
    })(req, res, next);
  };
  module.exports={googleAuth,googleAuthCallback}