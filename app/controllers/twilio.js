var express = require('express'),
  router = express.Router(),
  twilio = require('twilio'),
  client = twilio('AC604badbcc8ce63d0a4a15e1407d28068', 'f51972084f378212d79263923b0e29d8');

module.exports = function (app) {
  app.use('/', router);
};

client.messages.create({
    to:'+447961223088',
    from:'+442033897477',
    body:'Your PayPal account has been charged £2.50'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});