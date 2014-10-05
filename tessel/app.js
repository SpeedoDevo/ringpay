var tessel = require('tessel');
var router = require('tiny-router');
var fs = require('fs');

router.use('static', {path: './static'})
      .use('fs', fs)
      .listen(80);


router.post('/reg', function(req, res){
  res.send(200);
}).post('/pay', function(req, res){
  res.send(200);
});