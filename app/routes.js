var braintree = require('braintree');
var gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: "qrnmqsx39dsct293",
	publicKey: "y39gvpg9hmz6mw9x",
	privateKey: "153607c095324e5b4d0a7152240378e2"
});
// var twilio = require('twilio');
// var client = twilio('AC604badbcc8ce63d0a4a15e1407d28068', 'f51972084f378212d79263923b0e29d8');
// var uid = 0;

module.exports = function(app) {

// 	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/bt/ctoken',function (req,res){
		gateway.clientToken.generate({}, function (err, response) {
			res.end(response.clientToken)
		});
	});

	app.post("/reg", function (req, res) {
		gateway.customer.create({
			id: uid,
			//phone
			paymentMethodNonce: req.body.payment_method_nonce
		}, function (err, result) {
			res.end();
		});
	});

// 	app.get('/pay', function(req, res){
// 		console.log(req.query.uid, req.query.amount);
// 		gateway.transaction.sale({
// 			customerId: req.query.uid,
// 			amount: req.query.amount
// 		}, function (err, result) {
// 			client.messages.create({
// 				to:'+447961223088',
// 				from:'+442033897477',
// 				body:'Your credit card has been charged £2.50'
// 			}, function(error, message) {
// 				if (error) {
// 					console.log(error.message);
// 				}
// 			});
// 			res.end();
// 		});
// 	});

// 	app.get('/uid', function(req, res){
// 		// uid = req.body.uid;
// 		uid = req.query.uid;
// 		res.end(uid);
// 	})

// 	// frontend routes =========================================================
// 	// route to handle all angular requests
// 	app.get('/:uid', function(req, res) {
// 		res.sendFile('/public/index.html');
// 	});

	app.get('*', function(req, res) {
		res.sendFile('/public/index.html');
	});

};